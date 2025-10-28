import { useEffect, useState } from 'react'
import { SkillGrid } from './SkillGrid/SkillGrid.jsx'
import { analyze } from '@/api/analyze.js'
import { JobCard } from './JobCard/JobCard.jsx'

export function Sidebar({ selectedSkills, toggleSkill }) {
  return (
    <aside className="bg-dark-cloud border-r border-dark-smoke col-start-1 row-start-1 row-span-3 h-screen flex flex-col">
      <SkillSet />
      <JobList />
    </aside>
  )

  function SkillSet() {
    return (
      <section className="p-4 border-b border-dark-smoke">
        <h2 className="text-xl">Your Skills</h2>
        {selectedSkills.length === 0 ? (
          <p className="py-1">You haven't added any skills yet.</p>
        ) : (
          <SkillGrid skills={selectedSkills} selectedSkills={selectedSkills} onToggleSkill={toggleSkill} />
        )}
      </section>
    )
  }

  function JobList() {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const data = await analyze(selectedSkills)
          setJobs(data)
        } catch (err) {
          console.error('Failed to analyze:', err)
        }
      }
      fetchJobs()
    }, [])

    return (
      <section className="p-4 flex-1 overflow-y-auto">
        <h2 className="text-xl">Your Roles</h2>
        <div>
          {jobs.length === 0 ? (
            <p>No roles found yet.</p>
          ) : (
            jobs.map(job => (
              <JobCard key={job.name} title={job.name} percentage={Math.round(job.progress)} missingSkills={job.missing.map(skill => skill.name)} />
            ))
          )}
        </div>
      </section>
    )
  }
}
