import { Link } from "react-router-dom";
import "./DestinationCard.css";

function DestinationCard({ destination, isFavorite, onToggleFavorite }) {
  return (
    <div className="destination-card">

      <button
        type="button"
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={(event) => {
          event.stopPropagation();
          onToggleFavorite(destination.id);
        }}
      >
        {isFavorite ? "♥" : "♡"}
      </button>

      <Link to={`/destinations/${destination.id}`} className="card-link">
        <img src={destination.image} alt={destination.name} />

        <div className="destination-card-content">
          <h3>{destination.name}</h3>

          <p className="card-country">{destination.country}</p>

          <div className="badges">
            <span className="badge continent">{destination.continent}</span>
            <span className="badge budget">{destination.budget}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DestinationCard;