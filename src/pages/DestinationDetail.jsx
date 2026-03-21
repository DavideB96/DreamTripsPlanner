import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DestinationDetail.css";

function DestinationDetail({ destinations }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const destination = destinations.find(
    (d) => d.id === Number(id)
  );

  if (!destination) {
    return <p>Destination not found</p>;
  }

  return (
    <div className={`detail-page ${isLeaving ? "fade-out" : ""}`}>

      <button onClick={() => { setIsLeaving(true); setTimeout(() => { navigate(-1) }, 300); }} className="back-btn">
        ← Back to results
      </button>

      <div className="detail-hero">
        <img
          src={destination.image}
          alt={destination.name}
        />
        <div className="detail-overlay">
          <h1>{destination.name}</h1>
          <p>{destination.country}</p>
        </div>
      </div>

      <div className="detail-content">
        <div className="badges">
          <span className="badge continent">{destination.continent}</span>
          <span className="badge budget">{destination.budget}</span>
        </div>

        <p className="detail-description">
          {destination.description}
        </p>

        <p className="detail-price">
          Estimated cost: €{destination.price}
        </p>

        <h3>Itinerary</h3>

        <ul className="itinerary">
          {destination.itinerary.map((day, index) => (
            <li key={index} className="itinerary-item">
              <span className="day-label">Day {index + 1}:</span>
              <span className="day-text">{day}</span>
            </li>
          ))}
        </ul>
        <div className="contact-box">
          <h3>Need help planning this trip?</h3>

          <Link to="/contact" className="contact-btn">
            Contact us
          </Link>
        </div>
      </div>
    </div >
  );
}

export default DestinationDetail;