import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateFlowersDto, UpdateFlowerDto } from './dto/flowers.dto'

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.flower.findMany()
  }

  findOne(id: number) {
    return this.prisma.flower.findUnique({
      where: {
        id,
      },
    })
  }

  create(dto: CreateFlowersDto) {
    return this.prisma.flower.create({
      data: dto,
    })
  }

  update(id: number, dto: UpdateFlowerDto) {
    return this.prisma.flower.update({
      where: { id },
      data: dto,
    })
  }

  delete(id: number) {
    return this.prisma.flower.delete({
      where: {
        id,
      },
    })
  }
}
