import { MustHaveAtLeastOne, Pool } from '@/core/domain/pool.ts'
import { Category } from './category.ts'
import { Tool } from './tool.ts'

export type AreaAnalysis = {
  name: Category
  has: Tool[]
  missing: Tool[]
  good_to_have: Tool[]
  progress: number
  points: number
}

export class Area {
  private name: Category
  private essentials: Pool
  private optionals: Pool

  constructor(name: Category, essentials: Pool, ...optionals: Tool[]) {
    this.name = name
    this.essentials = essentials
    this.optionals = new MustHaveAtLeastOne(...optionals)
  }

  analyze(tools: Set<Tool>) {
    const essentialsAnalysis = this.essentials.analyze(tools)
    const optionalsAnalysis = this.optionals.analyze(tools)

    return {
      name: this.name,
      has: [...essentialsAnalysis.has, ...optionalsAnalysis.has],
      missing: essentialsAnalysis.progress < 1 ? essentialsAnalysis.missing : [],
      good_to_have: [...(essentialsAnalysis.progress === 1 ? essentialsAnalysis.missing : []), ...optionalsAnalysis.missing],
      progress: essentialsAnalysis.progress,
      points: essentialsAnalysis.has.length + optionalsAnalysis.has.length,
    } satisfies AreaAnalysis
  }
}
