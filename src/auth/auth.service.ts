import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { AuthSignInDto, AuthSignUpDto, AuthUpdateSettingsDto } from './dto'
import * as argon from 'argon2'
import { MailerService } from '@nestjs-modules/mailer'
import { refresh_tokens, users } from '@prisma/client'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Auth } from 'googleapis'
import { convertedUserDto } from './dto/authRespose.dto'
import { Role } from './enums'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class AuthService {
  private oauthClient: Auth.OAuth2Client

  constructor(private prisma: PrismaService, private config: ConfigService, private jwt: JwtService) {
  }


  async signup(dto: AuthSignUpDto, values: { userAgent: string; ipAddress: string }) {
    // generate password hash
    const hash = await argon.hash(dto.password)
    // save user to db
    try {
      const role = [Role.User]

      // console.log(role,)
      const user = await this.prisma.users.create({
        data: {
          username: dto.username,
          name: dto.name,
          role: role,
          password: hash,
        }
      })

      const convertedUser = this.convertUserData(user)

      delete user.password

      const tokens = await this.newRefreshAndAccessToken(user, values)
      const response = {
        user: convertedUser,
        access_token: tokens.accessToken,
        refresh_token: tokens.refreshToken
      }

      return response

    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken')
        }
      }
      throw error
    }
  }

  async signupAdmin(dto: AuthSignUpDto, values: { userAgent: string; ipAddress: string }) {
    // generate password hash
    const hash = await argon.hash(dto.password)
    // save user to db
    try {
      const role = [Role.Admin]

      // console.log(role,)
      const user = await this.prisma.users.create({
        data: {
          username: dto.username,
          name: dto.name,
          role: role,
          password: hash,
        }
      })

      const convertedUser = this.convertUserData(user)

      delete user.password

      const tokens = await this.newRefreshAndAccessToken(user, values)
      const response = {
        user: convertedUser,
        access_token: tokens.accessToken,
        refresh_token: tokens.refreshToken
      }

      return response

    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken')
        }
      }
      throw error
    }
  }

  async updateSettings(dto: AuthUpdateSettingsDto) {
    try {
      const updatedUser = await this.prisma.users.update({
        where: {
          id: dto.userId
        },
        data: {
          settings: {
            upsert: {
              create: {
                settings: dto.settings,
                shortcuts: dto.shortcuts
              },
              update: {
                settings: dto.settings,
                shortcuts: dto.shortcuts
              }
            }
          }

        }
      })
      delete updatedUser.password

      return updatedUser

    } catch (error) {
      throw error
    }
  }

  async signin(dto: AuthSignInDto, values: { userAgent: string; ipAddress: string }) {
    // find the user
    const user = await this.prisma.users.findUnique({
      where: {
        username: dto.username
      }
    })
    // if user does not exist throw exception
    if (!user) throw new NotFoundException('User not found.')

    // compare passwords
    const pwMatches = await argon.verify(user.password, dto.password)
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect.')

    // send back the user
    const convertedUser = this.convertUserData(user)
    delete user.password
    const tokens = await this.newRefreshAndAccessToken(user, values, dto.remember)
    const response = {
      user: convertedUser,
      access_token: tokens.accessToken,
      refresh_token: tokens.refreshToken
    }
    return response
  }

  async signinAdmin(dto: AuthSignInDto, values: { userAgent: string; ipAddress: string }) {
    // find the user
    // await this.checkAdminUser(dto)
    const user = await this.prisma.users.findUnique({
      where: {
        username: dto.username
      }
    })
    // if user does not exist throw exception
    if (!user) throw new NotFoundException('User not found.')

    // compare passwords
    const pwMatches = await argon.verify(user.password, dto.password)
    // if password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect.')

    // send back the user
    const convertedUser = this.convertUserData(user)
    delete user.password
    const tokens = await this.newRefreshAndAccessToken(user, values)
    const response = {
      user: convertedUser,
      access_token: tokens.accessToken,
      refresh_token: tokens.refreshToken
    }
    return response
  }


  async logout(refreshStr): Promise<void> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr)

    if (!refreshToken) {
      return
    }
    // delete refreshtoken from db
    await this.prisma.refresh_tokens.delete({
      where: {
        id: refreshToken.id
      }
    })
  }

  private async checkAdminUser(dto: AuthSignInDto): Promise<void> {
    // getAdminUser(dto)
  }

  async refresh(refreshStr: string): Promise<{ user: convertedUserDto, access_token: string } | undefined> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr)

    if (!refreshToken) {
      return undefined
    }

    const user = await this.prisma.users.findFirst({
      where: {
        id: refreshToken.user_id
      }
    })
    if (!user) {
      return undefined
    }

    const convertedUser = this.convertUserData(user)
    delete user.password

    return {
      user: convertedUser,
      access_token: this.signAccessToken(refreshToken.user_id)
    }
  }

  private retrieveRefreshToken(
    refreshStr: string,
  ): Promise<refresh_tokens | undefined> {
    try {
      const decoded = this.jwt.verify(refreshStr, { secret: this.config.get('REFRESH_SECRET') })

      if (typeof decoded === 'string') {
        return undefined
      }
      return Promise.resolve(
        this.prisma.refresh_tokens.findFirst({
          where: {
            id: decoded.id
          }
        })
        ,
      )
    } catch (e) {
      return undefined
    }
  }

  // TOKEN FUNCTIONS 

  private async newRefreshAndAccessToken(
    user: users,
    values: { userAgent: string; ipAddress: string },
    remember = false
  ): Promise<{ accessToken: string; refreshToken: string }> {
    const refreshObject = await this.prisma.refresh_tokens.create({
      data: {
        user_id: user.id,
        user_agent: values.userAgent,
        ip_address: values.ipAddress
      }
    })

    return {
      refreshToken: this.signRefreshToken(refreshObject),
      accessToken: this.signAccessToken(user.id, remember),
    }
  }

  private signAccessToken(userId: number, remember = false): string {
    const payload = {
      sub: userId
    }
    return this.jwt.sign(payload, {
      expiresIn: remember === true ? '100y' : '15m',
      secret: this.config.get('JWT_SECRET')
    })
  }

  private signRefreshToken(data: Partial<refresh_tokens>): string {
    return this.jwt.sign({ ...data }, { secret: this.config.get('REFRESH_SECRET') })
  }

  convertUserData(user: users) {

    return {
      role: user.role,
      data: {
        displayName: user.name || user.username,
        photoURL: '', //assets/images/avatars/brian-hughes.jpg
        // etterem_id: user.etterem_id,
        username: user.username,
        shortcuts: []
      }

    }

  }
}


