import { RolesList } from '@/core/data/roles.ts'
import { RolesAnalysis } from '@/core/domain/role.ts'
import { Failure } from '@/lib/errors.ts'
import { isTool, Tools } from '@/core/data/tools.ts'

type Input = {
  tools: string[]
}

export function analyze(input: Input): RolesAnalysis[] {
  const tools = input.tools.map(tool => {
    if (!isTool(tool)) {
      throw new Failure(400, `Invalid tool: ${tool}!`)
    }
    return Tools[tool]
  })

  return RolesList.map(role => role.analyze(tools))
}
