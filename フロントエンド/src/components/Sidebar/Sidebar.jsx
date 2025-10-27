import SidebarSkillSet from '../SidebarSkillSet/SidebarSkillSet.jsx'
import JobList from '../JobList/JobList.jsx'
import './Sidebar.css'

const Sidebar = ({ selectedSkills, toggleSkill }) => {
  return (
    <div className="sidebar">
      <SidebarSkillSet selectedSkills={selectedSkills} onToggleSkill={toggleSkill} />
      <JobList selectedSkills={selectedSkills} />
    </div>
  )
}

export default Sidebar
