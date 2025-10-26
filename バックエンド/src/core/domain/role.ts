import { Level, LevelAnalysis } from './level.ts'
import { Tool } from './tool.ts'

export type RolesAnalysis = {
  name: string
  analysis: LevelAnalysis[]
}

export class Role {
  private name: string
  private levels: Level[]

  constructor(name: string, levels: Level[]) {
    this.name = name
    this.levels = levels
  }

  analyze(tools: Tool[]): RolesAnalysis {
    return { name: this.name, analysis: this.levels.map(level => level.analyze(tools)) }
  }
}
