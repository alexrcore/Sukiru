import { useEffect, useState } from 'react'
import { getTools } from '@/api/tools'
import { SkillGrid } from './SkillGrid/SkillGrid'
import SearchBar from './SearchBar/SearchBar'

export function Wall({ selectedSkills, toggleSkill }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const tools = await getTools()
        setSkills(tools)
      } catch (err) {
        console.error('Failed to fetch tools:', err)
      }
    }
    fetchSkills()
  }, [])

  const filteredSkills = skills.filter(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <main className="content-center col-start-2 row-start-2">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className="skill-grid-wrapper">
        <SkillGrid skills={filteredSkills} selectedSkills={selectedSkills} onToggleSkill={toggleSkill} />
      </div>
    </main>
  )
}
