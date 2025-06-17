import express from 'express'
import color from 'chalk'
import { analyzeHandler } from '@/interface/handler.ts'
import { ServerOptions } from '@/config/options.ts'
import { handleFailure } from '@/interface/middlewares/failure.ts'
import { handle404 } from '@/interface/middlewares/404.ts'
import { handleJSON } from '@/interface/middlewares/json.ts'

export function bootstrap(options: ServerOptions) {
  const app = express()

  app.use(handleJSON())

  app.post('/', analyzeHandler)

  app.use(handle404)
  app.use(handleFailure)

  app.listen(options.port, () => {
    console.log(color.cyanBright('⚡ Server is listening!'), color.greenBright(`[ ${options.host}:${options.port} ]`))
  })
}
