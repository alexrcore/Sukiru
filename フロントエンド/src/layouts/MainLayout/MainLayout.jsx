import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import SkillGrid from '../../components/SkillGrid/SkillGrid'
import './MainLayout.css'

const ALL_SKILLS = [
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Git',
  'Tailwind',
  'Java',
  'ExpressJS',
  'ReactJS',
  'PHP',
  'Python',
  'SQL',
  'Docker',
  'Google Cloud',
  'GitHub Actions',
  'MongoDB',
  'NestJS',
  'C#',
  'Kotlin',
  'AWS',
  'Kubernetes',
  'Django',
  'Prisma',
  'NextJS',
  'Unity',
  'AngularJS',
  'OOP',
  'DDD',
  'Flutter',
]

const MainLayout = () => {
  const [selectedSkills, setSelectedSkills] = useState('')

  const toggleSkill = skill => {
    setSelectedSkills(prev => (prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]))
  }

  return (
    <div className="main-layout">
      <Sidebar selectedSkills={selectedSkills} toggleSkill={toggleSkill} />
      <div className="main-layout-body">
        <Header />
        <main className="main-content">
          <div>
            <SkillGrid skills={ALL_SKILLS} selectedSkills={selectedSkills} onToggleSkill={toggleSkill} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
