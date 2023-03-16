export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search i.e macbook,iphone etc"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
