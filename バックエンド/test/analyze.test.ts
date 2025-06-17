import { analyze } from '@/core/service/analyze.ts'
import { Failure } from '@/lib/errors.ts'
import { describe, it, expect } from 'vitest'

describe('Analyze', () => {
  it('Valid inputs', () => {
    const input = { skills: ['TypeScript', 'Express'] }
    const output = analyze(input)
    expect(output).matchSnapshot()
  })

  it('Invalid inputs', () => {
    const invalidSkill = 'X'
    const input = { skills: ['TypeScript', 'Express', invalidSkill] }
    expect(() => analyze(input)).toThrow(Failure)
    expect(() => analyze(input)).toThrowError(`Invalid skill: ${invalidSkill}!`)
  })
})
