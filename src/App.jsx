import { useEffect, useState } from "react";
import "./App.css";
import { destinations } from "./data/destinations";
import { Routes, Route, useLocation } from "react-router-dom";
import DestinationCard from "./components/DestinationCard";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import DestinationDetail from "./pages/DestinationDetail";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import "./components/Filters.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesContinent =
      selectedContinent === "" || destination.continent === selectedContinent;

    const matchesBudget =
      selectedBudget === "" || destination.budget === selectedBudget;

    return matchesSearch && matchesContinent && matchesBudget;
  });

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleContinentChange(event) {
    setSelectedContinent(event.target.value);
  }

  function handleBudgetChange(event) {
    setSelectedBudget(event.target.value);
  }

  function handleClearFilters() {
    setSearchTerm("");
    setSelectedContinent("");
    setSelectedBudget("");
  }

  function handleToggleFavorite(destinationId) {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.includes(destinationId);

      if (isAlreadyFavorite) {
        return prevFavorites.filter((id) => id !== destinationId);
      } else {
        return [...prevFavorites, destinationId];
      }
    });
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="app">
        {isHome && (
          <div className="app-header">
            <h1>Dream Trips Planner</h1>
            <p>
              Explore destinations, filter by continent and budget, and plan your
              next adventure.
            </p>
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="filters-container">
                  <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                  />

                  <FilterBar
                    selectedContinent={selectedContinent}
                    onContinentChange={handleContinentChange}
                    selectedBudget={selectedBudget}
                    onBudgetChange={handleBudgetChange}
                  />

                  <button onClick={handleClearFilters} className="clear-btn">
                    Clear
                  </button>
                </div>

                {filteredDestinations.length === 0 ? (
                  <p className="no-results">No destinations found</p>
                ) : (
                  <div className="cards-container">
                    {filteredDestinations.map((destination) => (
                      <DestinationCard
                        key={destination.id}
                        destination={destination}
                        isFavorite={favorites.includes(destination.id)}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))}
                  </div>
                )}
              </>
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                destinations={destinations}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
              />
            }
          />

          <Route
            path="/destinations/:id"
            element={<DestinationDetail destinations={destinations} />}
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;