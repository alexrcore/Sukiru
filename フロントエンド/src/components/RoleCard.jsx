import { ProgressBar } from '@/components/ProgressBar'
import { SkillsWrapper } from '@/components/SkillsWrapper'

export function RoleCard({ title, progress, points, missing, goodToHave, toggleSkill }) {
  return (
    <div className="p-4 border-2 border-dark-smoke rounded-xl bg-void/20">
      <div className="flex justify-between items-center">
        <h3 className="text-xl">{title}</h3>
        <h4>{points}pt</h4>
      </div>

      <ProgressBar percentage={progress} />

      {missing.length ? (
        <div className="space-y-1 py-1">
          <h4 className="opacity-60">Missing:</h4>
          <SkillsWrapper skills={missing.slice(0, 7)} state="missing" onClick={toggleSkill} />
        </div>
      ) : (
        <p>You are now qualified for this role!</p>
      )}

      {goodToHave.length ? (
        <div className="space-y-1 py-1">
          <h4 className="opacity-60">Good to have:</h4>
          <SkillsWrapper skills={goodToHave} state="optional" onClick={toggleSkill} />
        </div>
      ) : null}
    </div>
  )
}
