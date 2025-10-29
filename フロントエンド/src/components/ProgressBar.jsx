export function ProgressBar({ percentage }) {
  return (
    <div className="w-full h-3 bg-dark-smoke rounded-md overflow-hidden mt-2 mb-4">
      <div className="h-full bg-purple-700 transition-all duration-300 ease-in-out" style={{ width: `${percentage}%` }}></div>
    </div>
  )
}
