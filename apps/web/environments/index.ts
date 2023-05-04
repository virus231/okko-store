export const webEnv: IWebEnv = {
  isProd: process.env.OKKO_ENV === 'production',
  api: {
    url: process.env.OKKO_API_URL
  },
  storage: {
    url: process.env.OKKO_WEB_STORAGE_URL,
    endpoint: process.env.OKKO_WEB_STORAGE_ENDPOINT
  }
}

export interface IWebEnv {
  isProd: boolean
  api: {
    url: string
  }
  storage: {
    url: string
    endpoint: string
  }
}
