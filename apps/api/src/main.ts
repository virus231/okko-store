/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { apiEnv } from './environments/environment'

const { isProd, api } = apiEnv

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'

  app.setGlobalPrefix(globalPrefix)
  await app.listen(api.port)

  Logger.log(`🚀 Application is running on: http://localhost:${api.port}/${globalPrefix}`)
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().catch((error) => {
  console.log(error)
})
