import { roles } from '@/core/data/roles.ts'
import { Role } from '@/core/domain/role.ts'
import { isSkill, skills } from '@/core/data/skills.ts'
import { Failure } from '@/lib/errors.ts'

type Input = {
  skills: string[]
}

type Output = {
  matches: {
    label: string
    fit: number
    missings: string[]
  }[]
}

export function analyze(input: Input): Output {
  const condidates: Role[] = roles()

  input.skills.forEach(skill => {
    if (!isSkill(skill)) {
      throw new Failure(400, `Invalid skill: ${skill}!`)
    }

    condidates.forEach(condidate => {
      condidate.addQualification(skills[skill])
    })
  })

  return { matches: condidates.map(condidate => condidate.getObject()).sort((a, b) => b.fit - a.fit) }
}
