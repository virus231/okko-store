import { Prisma } from '@prisma/client'

export class CreateHomeBlockDto {
  // @ts-ignore
  readonly data: Prisma.HomeBlockCreateInput
}
