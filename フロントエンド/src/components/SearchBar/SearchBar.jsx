import './SearchBar.css'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search skills..." value={value} onChange={e => onChange(e.target.value)} />
    </div>
  )
}

export default SearchBar
