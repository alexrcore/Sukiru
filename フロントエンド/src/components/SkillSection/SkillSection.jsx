import SearchBar from '../SearchBar/SearchBar'
import SkillGrid from '../SkillGrid/SkillGrid'
import './SkillSection.css'

const SkillSection = ({ searchTerm, setSearchTerm, skills, selectedSkills, onToggleSkill }) => (
  <section className="skill-section">
    <SearchBar value={searchTerm} onChange={setSearchTerm} />
    <div className="skill-grid-wrapper">
      <SkillGrid skills={skills} selectedSkills={selectedSkills} onToggleSkill={onToggleSkill} />
    </div>
  </section>
)

export default SkillSection
