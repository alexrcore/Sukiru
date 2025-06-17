import './Sidebar.css'
import SidebarSkillSet from '../SidebarSkillSet/SidebarSkillSet.jsx'

const Sidebar = ({ selectedSkills, toggleSkill }) => {
  return (
    <div className="sidebar">
      <SidebarSkillSet selectedSkills={selectedSkills} onToggleSkill={toggleSkill} />
    </div>
  )
}

export default Sidebar
