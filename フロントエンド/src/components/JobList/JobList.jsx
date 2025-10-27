import JobCard from '../JobCard/JobCard.jsx'
import './JobList.css'

const JobList = () => {
  return (
    <div className="job-list">
      <h2 className="sidebar-title">Your Roles</h2>
      <div className="roles">
        <JobCard title="Frontend Developer" percentage={75} missingSkills={['React', 'CSS']} />
        <JobCard title="Backend Developer" percentage={50} missingSkills={['Node.js', 'Express']} />
        <JobCard title="Full Stack Developer" percentage={60} missingSkills={['GraphQL', 'Docker']} />
        <JobCard title="Full Stack Developer" percentage={60} missingSkills={['GraphQL', 'Docker']} />
      </div>
    </div>
  )
}

export default JobList
