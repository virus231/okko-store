export const apiEnv: IApiEnv = {
  isProd: process.env.OKKO_ENV === 'production',
  api: {
    port: Number(process.env.OKKO_API_PORT)
  },
  db: {
    url: process.env.OKKO_DB_URL
  }
}

export interface IApiEnv {
  isProd: boolean
  api: {
    port: number
  }
  db: {
    url: string
  }
}
