function FilterBar({
  selectedContinent,
  onContinentChange,
  selectedBudget,
  onBudgetChange
}) {
  return (
    <>
      <select
        value={selectedContinent}
        onChange={onContinentChange}
        className="filter-select"
      >
        <option value="">All Continents</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select
        value={selectedBudget}
        onChange={onBudgetChange}
        className="filter-select"
      >
        <option value="">All Budgets</option>
        <option value="€">€</option>
        <option value="€€">€€</option>
        <option value="€€€">€€€</option>
      </select>
    </>
  );
}

export default FilterBar;