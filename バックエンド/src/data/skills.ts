import { Skill } from '@/core/domain/skill.ts'

const skillNames = [
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

type SkillKey = (typeof skillNames)[number]

export const skills: Record<SkillKey, Skill> = Object.fromEntries(skillNames.map(key => [key, new Skill(key)])) as Record<SkillKey, Skill>

export const skillRegistry = {
  all: skills,
  get: (key: SkillKey) => skills[key],
  has: (key: string): key is SkillKey => key in skills,
}
