import SkillGrid from '../SkillGrid/SkillGrid'

const SidebarSkillSet = ({ selectedSkills, onToggleSkill }) => {
  return (
    <aside className="skillset-sidebar">
      <h2>Your Skills</h2>
      {selectedSkills.length === 0 ? (
        <p className="empty-note">You haven't added any skills yet.</p>
      ) : (
        <SkillGrid skills={selectedSkills} selectedSkills={selectedSkills} onToggleSkill={onToggleSkill} />
      )}
    </aside>
  )
}

export default SidebarSkillSet
