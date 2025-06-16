import express from 'express'
import color from 'chalk'
import { analyzeHandler } from '@/interface/handler.ts'
import { ServerOptions } from '@/config/options.ts'

export function bootstrap(options: ServerOptions) {
  const app = express()

  app.use(express.json())

  app.post('/', analyzeHandler)

  app.listen(options.port, () => {
    console.log(color.cyanBright('⚡ Server is listening!'), color.greenBright(`[ ${options.host}:${options.port} ]`))
  })
}
