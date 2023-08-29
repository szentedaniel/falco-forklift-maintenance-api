import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { users } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import * as argon from 'argon2'
import { Role } from 'src/auth/enums'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create(dto: CreateUserDto) {
    try {
      const hash = await argon.hash(dto.password)
      const role = dto.role != null ? [dto.role] : [Role.User]
      const user = await this.prisma.users.create({
        data: {
          ...dto,
          role: role,
          password: hash,
        }
      })

      delete user.password
      return user
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken')
        }
      }
      throw error
    }
  }

  async findAll(userId: number) {
    try {
      const users = await this.prisma.users.findMany({
        where: {
          id: {
            not: userId
          }
        },
      })

      if (!users.length) throw new NotFoundException(`Users not found`)

      const result = users.map(user => {
        delete user.password
        return user
      })

      return result
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.users.findFirst({
        where: {
          id: id
        }
      })
      if (!user) throw new NotFoundException(`User not found with id: ${id}`)

      delete user.password
      return user
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.prisma.users.update({
        where: {
          id: id
        },
        data: {
          ...updateUserDto
        }
      })

      if (!user) throw new NotFoundException(`User not found with id: ${id}`)

      delete user.password
      return user
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {

      const hasUser = await this.prisma.users.findFirst({
        where: {
          id: id
        }
      })

      if (!hasUser) throw new NotFoundException(`User not found with id: ${id}`)

      const user = await this.prisma.users.delete({
        where: {
          id: id
        }
      })


      delete user.password
      return user
    } catch (error) {
      throw error
    }
  }
}
