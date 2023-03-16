export const SortingProducts = ({ setSortState }) => {
  return (
    <div className="sorting_dropdown">
      <select
        defaultValue={"Default"}
        onChange={(e) => setSortState(e.target.value)}
      >
        <option value="Default">Default</option>
        <option value="Low to high">Low to high</option>
        <option value="High to low">High to low</option>
      </select>
    </div>
  )
}
