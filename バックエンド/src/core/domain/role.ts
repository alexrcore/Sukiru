import { Skill } from '@/core/domain/skill.ts'

export class Role {
  private label: string
  private fit: number
  private missings: Set<Skill>
  private total: number

  constructor(label: string, requirements: Set<Skill>) {
    this.label = label
    this.fit = 0
    this.missings = requirements
    this.total = requirements.size
  }

  public clone() {
    return new Role(this.label, new Set(this.missings))
  }

  public addQualification(skill: Skill) {
    if (this.missings.has(skill)) {
      this.missings.delete(skill)
      this.fit++
    }
  }

  public getObject() {
    return {
      label: this.label,
      fit: Number(((this.fit / this.total) * 100).toFixed(2)),
      missings: Array.from(this.missings).map(skill => skill.getName),
    }
  }
}
