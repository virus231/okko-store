import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from '@okko-store/api/data-access-db'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { data } = createUserDto

    const saltOrRounds = 10
    const hashedPassword = await bcrypt.hash(data.password, saltOrRounds)
    return this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword
      }
    })
  }

  findAll() {
    return this.prisma.user.findMany()
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: String(id)
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      data: updateUserDto.data,
      where: {
        id: String(id)
      }
    })
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: String(id)
      }
    })
  }
}
