import { Body, Controller, Delete, HttpCode, Ip, Post, Req } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { AuthSignInDto, AuthSignUpDto } from './dto'
import { defaultAuthResponseDto, ErrorResonseDto } from './dto/authRespose.dto'
import RefreshTokenDto from './dto/refresh-token.dto'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiTags('mobile')
  @Post('register')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: defaultAuthResponseDto,
  })
  @ApiResponse({
    status: 403,
    type: ErrorResonseDto,
  })
  signup(@Req() request, @Ip() ip: string, @Body() dto: AuthSignUpDto) {
    return this.authService.signup(dto, {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    })
  }

  @Post('register/admin')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: defaultAuthResponseDto,
  })
  @ApiResponse({
    status: 403,
    type: ErrorResonseDto,
  })
  signupAdmin(@Req() request, @Ip() ip: string, @Body() dto: AuthSignUpDto) {
    return this.authService.signupAdmin(dto, {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    })
  }

  @ApiTags('mobile')
  @Post('login')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: defaultAuthResponseDto,
  })
  @ApiResponse({
    status: 403,
    type: ErrorResonseDto,
  })
  @ApiResponse({
    status: 404,
    type: ErrorResonseDto,
  })
  signin(@Req() request, @Ip() ip: string, @Body() dto: AuthSignInDto) {
    // console.log(dto)

    return this.authService.signin(dto, {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    })
  }

  @Post('login/admin')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: defaultAuthResponseDto,
  })
  @ApiResponse({
    status: 403,
    type: ErrorResonseDto,
  })
  @ApiResponse({
    status: 404,
    type: ErrorResonseDto,
  })
  signinAdmin(@Req() request, @Ip() ip: string, @Body() dto: AuthSignInDto) {
    // console.log(dto)

    return this.authService.signinAdmin(dto, {
      ipAddress: ip,
      userAgent: request.headers['user-agent'],
    })
  }

  @Post('refresh')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    type: defaultAuthResponseDto,
  })
  refreshToken(@Body() body: RefreshTokenDto) {
    return this.authService.refresh(body.refreshToken)
  }

  @Delete('logout')
  async logout(@Body() body: RefreshTokenDto) {
    return this.authService.logout(body.refreshToken)
  }
}
