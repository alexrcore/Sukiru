import { analyze } from '@/core/service/analyze.ts'
import { Request, Response } from 'express'

export function analyzeHandler(req: Request, res: Response) {
  try {
    res.status(200).send(analyze({ skills: req.body.skills }))
  } catch (e) {
    res.status(400).send({ error: String(e) })
  }
}
