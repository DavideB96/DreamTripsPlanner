import DestinationCard from "../components/DestinationCard";

function Favorites({ destinations, favorites, onToggleFavorite }) {
  const favoriteDestinations = destinations.filter((destination) =>
    favorites.includes(destination.id)
  );

  return (
    <div>
      <h2>Your Favorites</h2>

      {favoriteDestinations.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="cards-container">
          {favoriteDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              isFavorite={favorites.includes(destination.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;