/* eslint-disable indent */
import { ApiProperty, ApiPropertyOptional, } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  username: string

  @ApiPropertyOptional()
  role: string | undefined | null

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string
}
