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
