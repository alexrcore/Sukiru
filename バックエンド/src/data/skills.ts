import { Skill } from '@/core/domain/skill.ts'

type SkillKey = (typeof values)[number]

const values = [
  'HTML',
  'CSS',
  'Javascript',
  'Typescript',
  'NodeJS',
  'ExpressJS',
  'NestJS',
  'SQL',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'Docker',
  'Kubernetes',
  'Github_Actions',
  'Google_Cloud',
] as const

export const skills = Object.fromEntries(values.map(key => [key, new Skill(key)])) as Record<SkillKey, Skill>
export const isSkill = (key: string): key is SkillKey => key in skills
