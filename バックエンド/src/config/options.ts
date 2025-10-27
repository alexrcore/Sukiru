import 'dotenv/config'

export type ServerOptions = {
  port: number
  host: string
  clientUrl: string
}

export const serverOpts: ServerOptions = {
  port: Number(process.env.PORT),
  host: process.env.HOST!,
  clientUrl: process.env.CLIENT_URL!,
}
