/* eslint-disable indent */
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { IsBoolean, IsNumber } from "class-validator"

export class CreateMaintenanceDto {
  @ApiProperty()
  @IsNumber()
  forklift_id: number

  @ApiProperty()
  @IsBoolean()
  has_damage: boolean

  @ApiPropertyOptional()
  description: string | undefined | null

  @ApiPropertyOptional()
  images: Array<string> | undefined | null
}
