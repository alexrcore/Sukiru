import { Skill } from '@/core/domain/skill.ts'
import { countRequirements } from '@/core/data/roles.ts'

export class Role {
  public readonly label: string
  public readonly requirements: Set<Skill>

  private fit: number = 0

  constructor(label: string, requirements: Skill[] | Set<Skill>) {
    this.label = label
    this.requirements = new Set<Skill>(requirements)
  }

  public addQualification(skill: Skill) {
    if (this.requirements.has(skill)) {
      this.requirements.delete(skill)
      this.fit++
    }
  }

  public getObject() {
    return {
      label: this.label,
      fit: Math.round((this.fit / countRequirements(this.label)) * 100),
      missings: Array.from(this.requirements).map(skill => skill.name),
    }
  }
}
