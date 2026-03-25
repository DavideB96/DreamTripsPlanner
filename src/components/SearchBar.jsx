import "./SearchBar.css";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Search destinations..."
        value={searchTerm}
        onChange={onSearchChange}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}

export default SearchBar;