import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common'
import { ForkliftsService } from './forklifts.service'
import { CreateForkliftDto } from './dto/create-forklift.dto'
import { UpdateForkliftDto } from './dto/update-forklift.dto'
import { JwtGuard, RolesGuard } from 'src/auth/guard'
import { Role } from 'src/auth/enums'
import { Roles } from 'src/auth/decorator'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('forklifts')
@Controller('forklifts')
export class ForkliftsController {
  constructor(private readonly forkliftsService: ForkliftsService) { }

  @Post()
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({
    summary: `ReqRole: ${[Role.Admin]}`,
  })
  @ApiBearerAuth()
  create(@Body() createForkliftDto: CreateForkliftDto) {
    return this.forkliftsService.create(createForkliftDto)
  }

  @Get()
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: `ReqRole: ${[Role.Admin, Role.User]}`,
  })
  @ApiBearerAuth()
  findAll() {
    return this.forkliftsService.findAll()
  }

  @Get(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: `ReqRole: ${[Role.Admin, Role.User]}`,
  })
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.forkliftsService.findOne(+id)
  }

  @Patch(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({
    summary: `ReqRole: ${[Role.Admin]}`,
  })
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateForkliftDto: UpdateForkliftDto) {
    return this.forkliftsService.update(+id, updateForkliftDto)
  }
}
