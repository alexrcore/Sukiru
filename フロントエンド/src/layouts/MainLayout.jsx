import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { Wall } from '@/components/wall'
import { Footer } from '@/components/global/footer'
import { Header } from '@/components/global/header'

export default function MainLayout() {
  const [selectedSkills, setSelectedSkills] = useState([])

  const toggleSkill = skill => setSelectedSkills(prev => (prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]))

  return (
    <section className="grid grid-cols-[1fr_2fr] grid-rows-[auto_auto_5rem] h-screen border border-dark-smoke">
      <Header />
      <Wall selectedSkills={selectedSkills} toggleSkill={toggleSkill} />
      <Sidebar selectedSkills={selectedSkills} toggleSkill={toggleSkill} />
      <Footer />
    </section>
  )
}
