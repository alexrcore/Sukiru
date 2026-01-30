import { getTools } from '@/core/service/getTools.ts'
import { describe, it, expect } from 'vitest'

describe('Analyze', () => {
  it('Get all tools', () => {
    const output = getTools()
    expect(output).matchSnapshot()
  })
})
