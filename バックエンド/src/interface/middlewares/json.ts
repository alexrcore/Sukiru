import { Failure } from '@/lib/errors.ts'
import express, { Request, Response } from 'express'

export function handleJSON() {
  return express.json({
    strict: true,
    verify: (_req: Request, _res: Response, buf: Buffer<ArrayBufferLike>, encoding: BufferEncoding) => {
      try {
        JSON.parse(buf.toString(encoding))
      } catch {
        throw new Failure(400, 'JSON is malformed!')
      }
    },
  })
}
