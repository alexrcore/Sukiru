import { NextFunction, Request, Response } from 'express'
import { Failure } from '@/lib/errors.ts'

export function handle404(_req: Request, _res: Response, next: NextFunction) {
  next(new Failure(404, 'Route Not Found!'))
}
