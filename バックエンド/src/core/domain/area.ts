import { Category } from './category.ts'
import { Pool, PoolAnalysis } from './pool.ts'
import { Tool } from './tool.ts'

export type AreaAnalysis = {
  name: Category
  analysis: {
    essentials: PoolAnalysis[]
    optionals: PoolAnalysis[]
  }
  progress: number
  bonus: number
}

export class Area {
  private name: Category
  private essentials: Pool[]
  private optionals: Pool[]

  constructor(name: Category, essentials: Pool[], optionals: Pool[]) {
    this.name = name
    this.essentials = essentials
    this.optionals = optionals
  }

  analyze(tools: Tool[]): AreaAnalysis {
    const mem = {
      name: this.name,
      analysis: {
        essentials: [] as PoolAnalysis[],
        optionals: [] as PoolAnalysis[],
      },
      progress: 0,
      bonus: 0,
    }

    this.essentials.forEach(pool => {
      mem.analysis.essentials.push(pool.analyze(tools))
    })

    this.optionals.forEach(pool => {
      mem.analysis.optionals.push(pool.analyze(tools))
    })

    mem.progress = mem.analysis.essentials.reduce((acc, cur) => acc + (cur.done ? 1 : 0), 0) / this.essentials.length || 0
    mem.bonus = mem.analysis.essentials.reduce((acc, cur) => acc + cur.bonus, 0) * 2 + mem.analysis.optionals.reduce((acc, cur) => acc + cur.bonus, 0)

    return mem
  }
}
