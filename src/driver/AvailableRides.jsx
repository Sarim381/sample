import React from 'react'

const AvailableRides = () => {

  const rides = [
    {
      id: 1,
      pickup: "Liaquatabad",
      destination: "North Nazimabad",
      fare: 250,
    },
    {
      id: 2,
      pickup: "Nazimabad",
      destination: "Gulshan",
      fare: 400,
    },
    {
      id: 3,
      pickup: "Federal B Area",
      destination: "Saddar",
      fare: 500,
    },
  ];

  const handleAccept = (ride) => {
    alert(`Ride #${ride.id} accepted!`);
  };

  return (
    <div className="page">

      <h1>Available Rides 📍</h1>

      <div className="rides-container">

        {rides.map((ride) => (
          <div className="ride-card" key={ride.id}>

            <div className="ride-info">

              <h3>
                Ride #{ride.id}
              </h3>

              <p>
                📍 {ride.pickup}
              </p>

              <p>
                🏁 {ride.destination}
              </p>

              <h3>
                Rs. {ride.fare}
              </h3>

            </div>

            <button
              onClick={() => handleAccept(ride)}
            >
              Accept Ride
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AvailableRides;