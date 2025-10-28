import { SkillTag } from '../SkillTag'
import './SkillGrid.css'

export function SkillGrid({ skills, selectedSkills, onToggleSkill }) {
  skills = skills.sort(() => Math.random() - 0.5).slice(0, 25)

  return (
    <div className="skill-grid">
      {skills.map(skill => (
        <SkillTag key={skill} label={skill} state={selectedSkills.includes(skill) ? 'selected' : ''} onClick={() => onToggleSkill(skill)} />
      ))}
    </div>
  )
}
