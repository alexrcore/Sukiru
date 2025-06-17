import './SkillTag.css'

const SkillTag = ({ label, active, onClick, missing }) => {
  const className = `
    skill-tag 
    ${active ? 'skill-active' : ''} 
    ${missing ? 'skill-missing' : ''}
  `.trim()

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  )
}

export default SkillTag
