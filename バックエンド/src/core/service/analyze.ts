import { roles } from '@/data/roles.ts'
import { Role } from '@/core/domain/role.ts'
import { skillRegistry } from '@/data/skills.ts'

type Input = {
  skills: string[]
}

type Output = {
  suggestions: {
    label: string
    fit: number
    missings: string[]
  }[]
}

export function analyze(input: Input): Output {
  const condidates: Role[] = roles.map(role => role.clone())

  input.skills.forEach(skill => {
    if (!skillRegistry.has(skill)) {
      throw new Error(`Invalid skill: ${skill}`)
    }

    condidates.forEach(condidate => {
      condidate.addQualification(skillRegistry.get(skill))
    })
  })

  return { suggestions: Array.from(condidates).map(condidate => condidate.getObject()) }
}
