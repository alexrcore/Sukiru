import { analyze } from '@/core/service/analyze.ts'

// Test
console.log(JSON.stringify(analyze({ skills: ['HTML', 'CSS', 'SQL', 'PostgreSQL', 'Git'] }), null, 2))
