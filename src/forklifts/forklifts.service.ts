import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateForkliftDto } from './dto/create-forklift.dto'
import { UpdateForkliftDto } from './dto/update-forklift.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

@Injectable()
export class ForkliftsService {
  constructor(private prisma: PrismaService) { }
  async create(createForkliftDto: CreateForkliftDto) {
    try {
      const forklift = await this.prisma.forklifts.create({
        data: {
          ...createForkliftDto
        },
      })
      return forklift
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Már van ilyen azonosítójú targonca')
        }
      }
      throw error
    }
  }

  async findAll() {
    try {
      const forklifts = await this.prisma.forklifts.findMany()

      if (!forklifts.length) throw new NotFoundException(`Nem találhatók targoncák`)

      return forklifts
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const forklift = await this.prisma.forklifts.findFirst({
        where: {
          id: id,
        },
      })
      if (!forklift) throw new NotFoundException(`Nem található targonca ezzel az ID-vel: ${id}`)

      return forklift
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateForkliftDto: UpdateForkliftDto) {
    try {
      const forklift = await this.prisma.forklifts.update({
        where: {
          id: id,
        },
        data: {
          ...updateForkliftDto,
        },
      })

      if (!forklift) throw new NotFoundException(`Nem található targonca ezzel az ID-vel: ${id}`)

      return forklift
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Már van ilyen azonosítójú targonca')
        }
      }
      throw error
    }
  }
}
