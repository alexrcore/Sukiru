import { useEffect, useState } from 'react'
import JobCard from '../JobCard/JobCard.jsx'
import './JobList.css'
import { analyze } from '../../api/analyze.js'

const JobList = ({ selectedSkills }) => {
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
  }, [selectedSkills])

  return (
    <div className="job-list">
      <h2 className="sidebar-title">Your Roles</h2>
      <div className="roles">
        {jobs.length === 0 ? (
          <p>No roles found yet.</p>
        ) : (
          jobs.map(job => (
            <JobCard key={job.name} title={job.name} percentage={Math.round(job.progress)} missingSkills={job.missing.map(skill => skill.name)} />
          ))
        )}
      </div>
    </div>
  )
}

export default JobList
