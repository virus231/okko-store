import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import {PrismaService} from "@okko-store/api/data-access-db";

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService]
})
export class UserModule {}
