/* eslint-disable indent */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from 'class-validator'

export class AuthSignUpDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  // @ApiPropertyOptional({ enum: ['owner', 'admin', 'staff', 'user'], default: 'user' })
  // @IsOptional()
  // role: string | undefined
}

export class AuthUpdateSettingsDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: number

  @ApiProperty()
  @IsObject()
  @IsOptional()
  settings: object

  @ApiProperty()
  @IsObject()
  @IsOptional()
  shortcuts: object
}

const emailExamples = ['admin@developer.com', 'staff@developer.com', 'user@developer.com']

export class AuthSignInDto {
  @ApiProperty({
    examples: emailExamples,
    example: emailExamples[0],
  })
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiProperty({ example: 'developer' })
  @IsString()
  @IsNotEmpty()
  password: string

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  remember?: boolean
}

export class ForgotPasswordDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string
}

export class ResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  resetToken: string

  @ApiProperty()
  @IsNotEmpty()
  password: string
}
