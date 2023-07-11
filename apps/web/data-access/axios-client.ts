import { MainApi } from '@okko-store/web/data-access-axios'
import { webEnv } from '../environments'

export const API = new MainApi({
  baseUrl: webEnv.api.url
});