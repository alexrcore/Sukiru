import { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import SkillSection from '../../components/SkillSection/SkillSection'
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
  const [selectedSkills, setSelectedSkills] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const toggleSkill = skill => {
    setSelectedSkills(prev => (prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]))
  }

  const filteredSkills = ALL_SKILLS.filter(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="main-layout">
      <Sidebar selectedSkills={selectedSkills} toggleSkill={toggleSkill} />
      <div className="main-layout-body">
        <Header />
        <main className="main-content">
          <SkillSection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            skills={filteredSkills}
            selectedSkills={selectedSkills}
            onToggleSkill={toggleSkill}
          />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
