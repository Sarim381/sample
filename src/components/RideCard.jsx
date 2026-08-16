import React from 'react'

const RideCard = ({ ride, onSelect }) => {
  return (
    <div className="ride-card">

      <div className="ride-icon">
        {ride.icon}
      </div>

      <div className="ride-info">
        <h3>{ride.name}</h3>
        <p>{ride.description}</p>
        <span>⏱️ {ride.time}</span>
      </div>

      <div className="ride-price">
        <h3>Rs. {ride.price}</h3>

        <button onClick={() => onSelect(ride)}>
          Select
        </button>
      </div>

    </div>
  );
};

export default RideCard;
