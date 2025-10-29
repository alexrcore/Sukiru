import { SkillTag } from '@/components/SkillTag'

export function SkillsWrapper({ skills, onClick, state, center }) {
  return (
    <ul className={`${center ? 'justify-center' : ''} flex flex-wrap gap-2`}>
      {skills.map(skill => (
        <li key={skill}>
          <SkillTag label={skill} state={state} onClick={() => onClick(skill)} />
        </li>
      ))}
    </ul>
  )
}
