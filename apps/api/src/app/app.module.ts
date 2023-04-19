import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HomeBlockModule } from '@okko-store/api/feature-home-block'

@Module({
  imports: [HomeBlockModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
