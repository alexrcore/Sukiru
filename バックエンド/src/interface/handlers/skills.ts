import { getSkills } from '@/core/service/skills.ts'
import { Request, Response } from 'express'

export function getSkillsHandler(_req: Request, res: Response) {
  res.status(200).send({ skills: getSkills() })
}
