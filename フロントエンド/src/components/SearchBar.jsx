export function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search skills..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-4/5 px-4 py-2.5 border-2 border-dark-smoke text-gray-100 text-base rounded-xl outline-none transition-all duration-200 placeholder:text-gray-500 bg-void/80 focus:border-purple-700"
    />
  )
}
