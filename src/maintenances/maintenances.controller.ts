import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { MaintenancesService } from './maintenances.service'
import { CreateMaintenanceDto } from './dto/create-maintenance.dto'
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { GetUser, Roles } from 'src/auth/decorator'
import { Role } from 'src/auth/enums'
import { JwtGuard, RolesGuard } from 'src/auth/guard'

@ApiTags('maintenances')
@Controller('maintenances')
export class MaintenancesController {
  constructor(private readonly maintenancesService: MaintenancesService) { }

  @Post()
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: `ReqRole: ${[Role.Admin, Role.User]}`,
  })
  @ApiBearerAuth()
  create(@GetUser('id') userId: string, @Body() createMaintenanceDto: CreateMaintenanceDto) {
    return this.maintenancesService.create(+userId, createMaintenanceDto)
  }

  @Get('forklift/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: `ReqRole: ${[Role.Admin, Role.User]}`,
  })
  @ApiBearerAuth()
  findAll(@Param('id') forkliftId: string) {
    return this.maintenancesService.findAll(+forkliftId)
  }

  @Get('id/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: `ReqRole: ${[Role.Admin, Role.User]}`,
  })
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.maintenancesService.findOne(+id)
  }

  @Patch(':id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.Admin, Role.User)
  @ApiOperation({
    summary: `ReqRole: ${[Role.Admin, Role.User]}`,
  })
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateMaintenanceDto: UpdateMaintenanceDto) {
    return this.maintenancesService.update(+id, updateMaintenanceDto)
  }
}
