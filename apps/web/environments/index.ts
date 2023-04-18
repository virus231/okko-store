export const webEnv: IWebEnv = {
  isProd: process.env.OKKO_ENV === 'production',
  api: {
    url: process.env.OKKO_API_URL
  }
}

export interface IWebEnv {
  isProd: boolean
  api: {
    url: string
  }
}
