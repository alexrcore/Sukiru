import { useEffect, useState } from 'react'
import { getTools } from '@/api/tools'
import { SearchBar } from '@/components/SearchBar'
import { SkillsWrapper } from '@/components/SkillsWrapper'

export function Wall({ selectedSkills, toggleSkill }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [skills, setSkills] = useState([])

  useEffect(() => {
    getTools().then(setSkills).catch(console.error)
  }, [])

  const filteredSkills = skills
    .filter(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(skill => !selectedSkills.includes(skill))
    .sort(() => Math.random() - 0.5)
    .slice(0, 25)

  return (
    <main className="content-center lg:col-start-2 px-5 py-10 lg:px-20 bg-void/90 space-y-10 lg:space-y-40 z-10">
      <Hero />
      <section className="grid gap-5 place-items-center">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        {filteredSkills.length ? <SkillsWrapper center skills={filteredSkills} onClick={toggleSkill} /> : <p className="text-center">No skills are found!</p>}
      </section>
    </main>
  )
}

function Hero() {
  return (
    <header className="text-center pt-25 lg:col-start-2 lg:row-start-1 space-y-1">
      <h1 className="text-8xl lg:text-7xl break-keep font-audiowide">
        Sukiru - <span className="font-semibold">スキル</span>
      </h1>
      <p className="text-lg">
        Discover how far you are from reaching your dream <span className="text-purple-500">developer</span> job!
      </p>
    </header>
  )
}
