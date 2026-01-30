import { Tool } from './tool.ts'

export class Developer {
  tools: Tool[]

  constructor(tools: Tool[]) {
    this.tools = tools
  }
}
