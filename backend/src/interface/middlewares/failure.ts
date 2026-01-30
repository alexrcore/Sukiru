import { NextFunction, Request, Response } from 'express'
import color from 'chalk'

import { Failure } from '@/lib/errors.ts'

export function handleFailure(error: Failure, _req: Request, res: Response, next: NextFunction) {
  if (error.code < 500) {
    res.status(error.code).send({ error: error.message })
  } else {
    console.log(color.redBright(error.stack) ?? color.yellowBright('No stack trace is available!'))
    res.status(error.code).send({ error: 'Internal server error!' })
  }
  next()
}
