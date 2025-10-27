import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import SkillSection from '../../components/SkillSection/SkillSection'
import { getTools } from '../../api/tools'

import './MainLayout.css'

const MainLayout = () => {
  const [selectedSkills, setSelectedSkills] = useState([])
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

  const toggleSkill = skill => {
    setSelectedSkills(prev => (prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]))
  }

  const filteredSkills = skills.filter(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

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
