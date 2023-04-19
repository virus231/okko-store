import { PartialType } from '@nestjs/mapped-types'
import { CreateHomeBlockDto } from './create-home-block.dto'
import { Prisma } from '@prisma/client'

export class UpdateHomeBlockDto extends PartialType(CreateHomeBlockDto) {
  // @ts-ignore
  readonly data: Prisma.HomeBlockCreateInput
}
