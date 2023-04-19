import { Module } from '@nestjs/common'
import { HomeBlockService } from './home-block.service'
import { HomeBlockController } from './home-block.controller'
import { PrismaService } from '@okko-store/api/data-access-db'

@Module({
  controllers: [HomeBlockController],
  providers: [HomeBlockService, PrismaService]
})
export class HomeBlockModule {}
