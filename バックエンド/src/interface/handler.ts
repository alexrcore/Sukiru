import { analyze } from '@/core/service/analyze.ts'
import { Request, Response } from 'express'

export function analyzeHandler(req: Request, res: Response) {
  res.status(200).send(analyze({ skills: req.body.skills }))
}
