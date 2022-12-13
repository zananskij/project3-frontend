import { useState } from 'react'

const Search = ({ onSearchChange }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchChange = (event) => {
    event.preventDefault()
    setSearchInput(event.target.value)
    onSearchChange(event.target.value)
  }
  return (
    <div className="searchBarContainer">
      <input type="text" value={searchInput} placeholder="Search" onChange={handleSearchChange} />
    </div>
  )
}

export default Search
