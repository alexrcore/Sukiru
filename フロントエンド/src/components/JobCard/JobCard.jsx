import ProgressBar from '../ProgressBar/ProgressBar'
import { SkillTag } from '../SkillTag'
import './JobCard.css'

export function JobCard({ title, percentage, missingSkills }) {
  return (
    <div className="role-card">
      <h3 className="role-title">{title}</h3>
      <ProgressBar percentage={percentage} />
      <p className="my-1 opacity-75">Missing skills:</p>
      <div className="missing-skill-list">
        {missingSkills.length > 0 ? (
          missingSkills.slice(0, 10).map(skill => <SkillTag key={skill} label={skill} state="missing" />)
        ) : (
          <span className="opacity-75">You're fully qualified!</span>
        )}
      </div>
      <p className="my-1 opacity-75">Good to have skills:</p>
      <div className="space-x-2 space-y-2">
        {missingSkills.slice(0, 5).map(skill => (
          <SkillTag key={skill} label={skill} state="optional" />
        ))}
      </div>
    </div>
  )
}
