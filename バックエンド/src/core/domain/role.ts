import { Level, LevelAnalysis } from './level.ts'
import { Tool } from './tool.ts'

export type RoleAnalysis = {
  name: string
  analysis: LevelAnalysis[]
  progress: number
}

export class Role {
  private name: string
  private levels: Level[]

  constructor(name: string, levels: Level[]) {
    this.name = name
    this.levels = levels
  }

  analyze(tools: Set<Tool>) {
    const analysis = this.levels.map(level => level.analyze(tools))
    return { name: this.name, analysis, progress: analysis[analysis.length - 1].progress } satisfies RoleAnalysis
  }
}
