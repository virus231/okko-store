import { Prisma } from '@prisma/client'

export class CreateUserDto {
  // @ts-ignore
  readonly data: Prisma.UserCreateInput;
}
