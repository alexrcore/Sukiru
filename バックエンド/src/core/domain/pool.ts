import { Tool } from './tool.ts'

export type PoolAnalysis = {
  done: boolean
  bonus: number
  has: Tool[]
  missing: Tool[]
}

export class Pool {
  pool: Tool[]

  constructor(...pool: Tool[]) {
    this.pool = pool
  }

  analyze(tools: Tool[]): PoolAnalysis {
    const mem = {
      done: false,
      bonus: 0,
      has: [] as Tool[],
      missing: this.pool,
    }

    this.pool.forEach(tool => {
      if (tools.includes(tool)) {
        mem.done = true
        mem.bonus++
        mem.has.push(tool)
        mem.missing = this.pool.filter(t => t !== tool)
      }
    })

    return mem
  }
}
