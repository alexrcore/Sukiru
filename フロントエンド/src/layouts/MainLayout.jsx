import { useState } from 'react'
import { Sidebar } from '@/components/Sidebar'
import { Wall } from '@/components/Wall'
import { Footer } from '@/components/Footer'

export default function MainLayout() {
  const [selectedSkills, setSelectedSkills] = useState([])

  const toggleSkill = skill => setSelectedSkills(prev => (prev.includes(skill) ? prev.filter(s => s !== skill) : [skill, ...prev]))

  return (
    <section className="relative grid lg:grid-cols-[4fr_6fr] lg:grid-rows-[auto_5rem] m-[1.5px]">
      <Wall selectedSkills={selectedSkills} toggleSkill={toggleSkill} />
      <Sidebar selectedSkills={selectedSkills} toggleSkill={toggleSkill} />
      <Footer />
      <div
        className="absolute inset-0 row-end-2 lg:row-auto lg:col-start-2 bg-center pointer-events-none"
        style={{ backgroundImage: `url('/background.png')` }}
      ></div>
    </section>
  )
}
