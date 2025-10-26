import { Area, AreaAnalysis } from './area.ts'
import { Tool } from './tool.ts'

export enum LevelName {
  Junior = 'Junior',
  Intermediate = 'Intermediate',
  Senior = 'Senior',
}

export type LevelAnalysis = {
  name: LevelName
  analysis: AreaAnalysis[]
  progress: number
  bonus: number
}

export class Level {
  private name: LevelName
  private areas: Area[]

  constructor(name: LevelName, areas: Area[]) {
    this.name = name
    this.areas = areas
  }

  analyze(tools: Tool[]): LevelAnalysis {
    const analysis = this.areas.map(area => area.analyze(tools))
    const progress = analysis.reduce((acc, cur) => acc + cur.progress, 0) / analysis.filter(a => a.analysis.essentials.length > 0).length
    const bonus = analysis.reduce((acc, cur) => acc + cur.bonus, 0)
    return { name: this.name, analysis, progress, bonus }
  }
}
