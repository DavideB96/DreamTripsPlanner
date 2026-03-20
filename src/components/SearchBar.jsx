function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search destinations..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
}

export default SearchBar;