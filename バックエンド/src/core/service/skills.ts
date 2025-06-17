import { values } from '@/core/data/skills.ts'

export function getSkills(): string[] {
  return [...values]
}
