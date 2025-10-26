import { getTools } from '@/core/service/getTools.ts'
import { Request, Response } from 'express'

export function getSkillsHandler(_req: Request, res: Response) {
  res.status(200).send({ tools: getTools() })
}
