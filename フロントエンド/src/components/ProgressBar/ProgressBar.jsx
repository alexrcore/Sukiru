import './ProgressBar.css'

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  )
}

export default ProgressBar
