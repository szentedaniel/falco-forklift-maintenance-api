import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateMaintenanceDto } from './dto/create-maintenance.dto'
import { UpdateMaintenanceDto } from './dto/update-maintenance.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class MaintenancesService {
  constructor(private prisma: PrismaService) { }
  async create(userId: number, createMaintenanceDto: CreateMaintenanceDto) {
    try {
      if (createMaintenanceDto.has_damage && !createMaintenanceDto.description) {
        throw new ForbiddenException('Leírás mező kitöltése kötelező')
      }
      const maintenance = await this.prisma.maintenances.create({
        data: {
          images: (createMaintenanceDto.images && createMaintenanceDto.images.length > 0) ? createMaintenanceDto.images : [],
          forklifts: {
            connect: {
              id: createMaintenanceDto.forklift_id
            }
          },
          users: {
            connect: {
              id: userId
            }
          },
          has_damage: createMaintenanceDto.has_damage,
          description: createMaintenanceDto.description
        },
        include: {
          forklifts: true,
          users: true
        }
      })

      delete maintenance.users.password

      return maintenance
    } catch (error) {
      throw error
    }
  }

  async findAll(forkliftId: number) {
    try {
      const maintenance = await this.prisma.maintenances.findMany({
        where: { forklift_id: forkliftId },
        include: {
          forklifts: true,
          users: true
        },
        orderBy: {
          created_at: 'desc'
        }
      })

      if (!maintenance.length) throw new NotFoundException(`Nem találhatók karbantartások`)

      const censoredMaintenance = maintenance.map(m => {
        const temp = m
        delete m.users.password
        return temp
      })
      return censoredMaintenance
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const maintenance = await this.prisma.maintenances.findFirst({
        where: { id: id },
        include: {
          forklifts: true,
          users: true
        }
      })

      if (!maintenance) throw new NotFoundException(`Nem találhatók karbantartások`)

      delete maintenance.users.password

      return maintenance
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateMaintenanceDto: UpdateMaintenanceDto) {
    try {
      if (updateMaintenanceDto.has_damage && !updateMaintenanceDto.description) {
        throw new ForbiddenException('Leírás mező kitöltése kötelező')
      }
      const maintenance = await this.prisma.maintenances.update({
        where: {
          id: id,
        },
        data: {
          ...updateMaintenanceDto,
        },
        include: {
          forklifts: true,
          users: true
        }
      })

      if (!maintenance) throw new NotFoundException(`Nem található karbantartás ezzel az ID-vel: ${id}`)

      delete maintenance.users.password

      return maintenance
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Már van ilyen azonosítójú karbantartás')
        }
      }
      throw error
    }
  }
}
