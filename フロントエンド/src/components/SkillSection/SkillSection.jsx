import SearchBar from '../SearchBar/SearchBar'
import SkillGrid from '../SkillGrid/SkillGrid'

const SkillSection = ({ searchTerm, setSearchTerm, skills, selectedSkills, onToggleSkill }) => (
  <section>
    <SearchBar value={searchTerm} onChange={setSearchTerm} />
    <SkillGrid skills={skills} selectedSkills={selectedSkills} onToggleSkill={onToggleSkill} />
  </section>
)

export default SkillSection
