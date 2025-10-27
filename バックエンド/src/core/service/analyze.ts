import { Roles } from '@/core/data/roles.ts'
import { Failure } from '@/lib/errors.ts'
import { isTool, Tools } from '@/core/data/tools.ts'
import { Tool } from '@/core/domain/tool.ts'

type Input = {
  tools: string[]
}

export function analyze(input: Input) {
  const tools = new Set<Tool>()

  input.tools.forEach(tool => {
    if (!isTool(tool)) throw new Failure(400, `Invalid tool: ${tool}!`)
    tools.add(Tools[tool])
  })

  return Roles.map(role => role.analyze(tools)).sort((a, b) => b.progress - a.progress)
}
