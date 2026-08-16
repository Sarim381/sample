import { useLocation, useNavigate } from "react-router";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pickup, destination, ride } = location.state || {};

  if (!ride) {
    return (
      <div className="page">
        <h2>No ride selected.</h2>
        <button onClick={() => navigate("/rides")}>
          Choose Ride
        </button>
      </div>
    );
  }

  const handleBooking = () => {
    alert("Ride booked successfully! 🚕");

    navigate("/my-rides");
  };

  return (
    <div className="page">

      <h1>Confirm Your Ride</h1>

      <div className="booking-card">

        <div className="selected-ride">
          <span>{ride.icon}</span>

          <div>
            <h2>{ride.name}</h2>
            <p>{ride.description}</p>
          </div>
        </div>

        <hr />

        <p>
          <strong>📍 Pickup:</strong>
          <br />
          {pickup}
        </p>

        <p>
          <strong>🏁 Destination:</strong>
          <br />
          {destination}
        </p>

        <p>
          <strong>⏱️ Estimated Time:</strong>
          {ride.time}
        </p>

        <h2>Fare: Rs. {ride.price}</h2>

        <button
          className="confirm-btn"
          onClick={handleBooking}
        >
          Confirm Ride 🚕
        </button>

      </div>

    </div>
  );
};

export default Booking;