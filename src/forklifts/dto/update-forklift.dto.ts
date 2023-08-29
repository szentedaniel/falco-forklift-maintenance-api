import { PartialType } from '@nestjs/swagger'
import { CreateForkliftDto } from './create-forklift.dto'

export class UpdateForkliftDto extends PartialType(CreateForkliftDto) {}
