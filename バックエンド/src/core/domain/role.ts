import { Tool } from './tool.ts'
import { Area } from '@/core/domain/area.ts'

export type RoleAnalysis = {
  name: string
  has: Tool[]
  missing: Tool[]
  good_to_have: Tool[]
  progress: number
  points: number
}

export class Role {
  private name: string
  private areas: Area[]

  constructor(name: string, areas: Area[]) {
    this.name = name
    this.areas = areas
  }

  analyze(tools: Set<Tool>) {
    const areasAnalysis = this.areas.map(area => area.analyze(tools))

    return {
      name: this.name,
      has: areasAnalysis.map(area => area.has).flat(),
      missing: areasAnalysis.map(area => area.missing).flat(),
      good_to_have: areasAnalysis.map(area => area.good_to_have).flat(),
      progress: (areasAnalysis.map(area => area.progress).reduce((acc, cur) => acc + cur, 0) / this.areas.length) * 100 || 0,
      points: areasAnalysis.map(area => area.points).reduce((acc, cur) => acc + cur, 0),
    } satisfies RoleAnalysis
  }
}
