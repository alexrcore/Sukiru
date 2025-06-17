import { getSkills } from '@/core/service/skills.ts'
import { describe, it, expect } from 'vitest'

describe('Analyze', () => {
  it('Get all skills', () => {
    const output = getSkills()
    expect(output).matchSnapshot()
  })
})
