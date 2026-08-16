import { useState } from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleFindRide = () => {
    if (!pickup || !destination) {
      alert("Please enter pickup and destination");
      return;
    }

    navigate("/rides", {
      state: {
        pickup,
        destination,
      },
    });
  };

  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <h1>
            Your Ride,
            <br />
            Your Way 🚕
          </h1>

          <p>
            Book your ride easily with BhaiRider.
          </p>

          <div className="booking-box">

            <input
              type="text"
              placeholder="📍 Pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />

            <input
              type="text"
              placeholder="🏁 Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />

            <button onClick={handleFindRide}>
              Find Ride
            </button>

          </div>

        </div>

      </section>

      <section className="features">

        <div>
          <h3>🏍️ Quick Rides</h3>
          <p>Book your ride within seconds.</p>
        </div>

        <div>
          <h3>💰 Affordable</h3>
          <p>Choose rides according to your budget.</p>
        </div>

        <div>
          <h3>🛡️ Safe</h3>
          <p>Your safety is our priority.</p>
        </div>

      </section>

    </div>
  );
};

export default Home;