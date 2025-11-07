import { useEffect, useState } from 'react'
import { analyze } from '@/api/analyze.js'
import { SkillsWrapper } from '@/components/SkillsWrapper.jsx'
import { RoleCard } from '@/components/RoleCard.jsx'

export function Sidebar({ selectedSkills, toggleSkill }) {
  return (
    <aside className="bg-dark-cloud border-t-2 lg:border-t-0 lg:border-r-2 border-dark-smoke lg:row-start-1 lg:row-span-2 lg:h-[calc(100vh-3px)] flex flex-col">
      <SkillSet />
      <JobList />
    </aside>
  )

  function SkillSet() {
    return (
      <section className="border-b-2 border-dark-smoke p-4 space-y-2 lg:max-h-1/3 overflow-y-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Your Skills</h2>
          <h4 className="mr-4">{selectedSkills.length}pt</h4>
        </div>
        {selectedSkills.length === 0 ? (
          <p className="opacity-75">You haven't added any skills yet.</p>
        ) : (
          <SkillsWrapper skills={selectedSkills} onClick={toggleSkill} state="selected" />
        )}
      </section>
    )
  }

  function JobList() {
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      analyze(selectedSkills)
        .then(setJobs)
        .catch(err => console.error('Failed to analyze:', err))
        .finally(() => setIsLoading(false))
    }, [selectedSkills])

    return (
      <section className="p-3 flex-1 overflow-y-auto m-1">
        <h2 className="text-2xl pb-2">Your Roles</h2>
        <div className="space-y-2">
          {isLoading ? (
            <p>Loading...</p>
          ) : !jobs.length ? (
            <p>No roles found yet.</p>
          ) : (
            jobs.map(job => (
              <RoleCard
                key={job.name}
                title={job.name}
                progress={job.progress}
                points={job.points}
                missing={job.missing.map(skill => skill.name)}
                goodToHave={job.good_to_have.map(skill => skill.name)}
                toggleSkill={toggleSkill}
              />
            ))
          )}
        </div>
      </section>
    )
  }
}
