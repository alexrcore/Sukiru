import { Tool } from '@/core/domain/tool.ts'

export type PoolAnalysis = {
  has: Tool[]
  missing: Tool[]
  progress: number
}

export interface Pool {
  tools: Tool[]

  analyze(tools: Set<Tool>): PoolAnalysis
}

export class MustHaveAll implements Pool {
  tools: Tool[]

  constructor(...tools: Tool[]) {
    this.tools = tools
  }

  analyze(tools: Set<Tool>) {
    const analysis = { has: [], missing: [], progress: 0 } as PoolAnalysis
    this.tools.forEach(tool => (tools.has(tool) ? analysis.has.push(tool) : analysis.missing.push(tool)))
    analysis.progress = analysis.has.length / this.tools.length || 0
    return analysis satisfies PoolAnalysis
  }
}

export class MustHaveAtLeastOne implements Pool {
  tools: Tool[]

  constructor(...tools: Tool[]) {
    this.tools = tools
  }

  analyze(tools: Set<Tool>) {
    const analysis = { has: [], missing: [], progress: 0 } as PoolAnalysis
    this.tools.forEach(tool => (tools.has(tool) ? analysis.has.push(tool) : analysis.missing.push(tool)))
    analysis.progress = analysis.has.length ? 1 : 0
    return analysis satisfies PoolAnalysis
  }
}
