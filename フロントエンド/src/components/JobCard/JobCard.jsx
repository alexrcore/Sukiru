import ProgressBar from '../ProgressBar/ProgressBar'
import SkillTag from '../SkillTag/SkillTag'
import './JobCard.css'

const JobCard = ({ title, percentage, missingSkills }) => {
  return (
    <div className="role-card">
      <h3 className="role-title">{title}</h3>
      <ProgressBar percentage={percentage} />
      <p className="role-subtitle">Missing skills:</p>
      <div className="missing-skill-list">
        {missingSkills.length > 0 ? (
          missingSkills.map(skill => <SkillTag key={skill} label={skill} missing />)
        ) : (
          <span className="no-missing">You're fully qualified!</span>
        )}
      </div>
    </div>
  )
}

export default JobCard
