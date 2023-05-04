import { Injectable } from '@nestjs/common'
import { CreateHomeBlockDto } from './dto/create-home-block.dto'
import { UpdateHomeBlockDto } from './dto/update-home-block.dto'
import { PrismaService } from '@okko-store/api/data-access-db'
import { Prisma } from '@prisma/client'

const include: Prisma.HomeBlockInclude = {
  image: {
    include: {
      rgbBackground: true
    }
  }
}

@Injectable()
export class HomeBlockService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHomeBlockDto: CreateHomeBlockDto) {
    return this.prisma.homeBlock.create({
      data: createHomeBlockDto.data,
      include
    })
  }

  findAll() {
    return this.prisma.homeBlock.findMany({ include })
  }

  findOne(id: number) {
    return this.prisma.homeBlock.findUnique({
      where: {
        id: String(id)
      },
      include
    })
  }

  update(id: number, updateHomeBlockDto: UpdateHomeBlockDto) {
    return this.prisma.homeBlock.update({
      data: updateHomeBlockDto.data,
      where: {
        id: String(id)
      },
      include
    })
  }

  remove(id: number) {
    return this.prisma.homeBlock.delete({
      where: {
        id: String(id)
      }
    })
  }
}
