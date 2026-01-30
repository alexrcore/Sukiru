import { analyze } from '@/core/service/analyze.ts'
import { Failure } from '@/lib/errors.ts'
import { describe, it, expect } from 'vitest'

describe('Analyze', () => {
  it('Valid inputs', () => {
    const input = { tools: ['TypeScript', 'Express'] }
    const output = analyze(input)
    expect(output).matchSnapshot()
  })

  it('Invalid inputs', () => {
    const invalidTool = 'X'
    const input = { tools: ['Go', 'Express', invalidTool] }
    expect(() => analyze(input)).toThrow(Failure)
    expect(() => analyze(input)).toThrowError(`Invalid tool: ${invalidTool}!`)
  })
})
