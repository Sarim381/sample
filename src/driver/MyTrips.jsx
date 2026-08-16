import React from 'react'

const MyTrips = () => {

  const trips = [
    {
      id: 1,
      pickup: "Liaquatabad",
      destination: "North Nazimabad",
      fare: 250,
      status: "Completed",
    },
    {
      id: 2,
      pickup: "Nazimabad",
      destination: "Gulshan-e-Iqbal",
      fare: 450,
      status: "Completed",
    },
  ];

  return (
    <div className="page">

      <h1>My Trips 📋</h1>

      <div className="my-rides">

        {trips.map((trip) => (
          <div
            className="history-card"
            key={trip.id}
          >

            <div>

              <h3>
                Trip #{trip.id}
              </h3>

              <p>
                📍 {trip.pickup}
              </p>

              <p>
                🏁 {trip.destination}
              </p>

            </div>

            <div>

              <h3>
                Rs. {trip.fare}
              </h3>

              <span className="completed">
                {trip.status}
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MyTrips;
