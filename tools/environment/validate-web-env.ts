import { plainToInstance } from 'class-transformer'
import { validateSync } from 'class-validator'
import { IWebEnv, webEnv } from '../../apps/web/environments'

import { IsBoolean, IsUrl, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import 'reflect-metadata'

export class WebEnvVo implements IWebEnv {
  // @ts-ignore
  @IsBoolean()
  public isProd: boolean

  // @ts-ignore
  @ValidateNested()
  // @ts-ignore
  @Type(() => WebEnvApiVo)
  public api: WebEnvApiVo

  // @ts-ignore
  @ValidateNested()
  // @ts-ignore
  @Type(() => WebEnvStorage)
  public storage: WebEnvStorage
}

class WebEnvStorage {
  // @ts-ignore
  @IsUrl()
  public url: string

  // @ts-ignore
  @IsUrl()
  public endpoint: string
}

class WebEnvApiVo {
  // @ts-ignore
  @IsUrl({ require_tld: false })
  public url: string
}

const webEnvVoInstance = plainToInstance(WebEnvVo, webEnv)
const errors = validateSync(webEnvVoInstance)

if (errors.length) {
  console.error(errors)
  process.exit(1)
}
