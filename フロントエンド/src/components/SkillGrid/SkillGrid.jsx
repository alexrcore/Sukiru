import SkillTag from '../SkillTag/SkillTag'
import './SkillGrid.css'

const SkillGrid = ({ skills, selectedSkills, onToggleSkill }) => {
  return (
    <div className="skill-grid">
      {skills.map(skill => (
        <SkillTag key={skill} label={skill} active={selectedSkills.includes(skill)} onClick={() => onToggleSkill(skill)} />
      ))}
    </div>
  )
}

export default SkillGrid
