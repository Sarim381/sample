import { useLocation, useNavigate } from "react-router";
import { rideOptions } from "../data/dummyData";
import RideCard from "../components/RideCard";

const Rides = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pickup = location.state?.pickup || "Liaquatabad";
  const destination =
    location.state?.destination || "North Nazimabad";

  const handleSelectRide = (ride) => {
    navigate("/booking", {
      state: {
        pickup,
        destination,
        ride,
      },
    });
  };

  return (
    <div className="page">

      <h1>Choose Your Ride 🚕</h1>

      <div className="route-box">
        <p>
          <strong>Pickup:</strong> {pickup}
        </p>

        <p>
          <strong>Destination:</strong> {destination}
        </p>
      </div>

      <div className="rides-container">

        {rideOptions.map((ride) => (
          <RideCard
            key={ride.id}
            ride={ride}
            onSelect={handleSelectRide}
          />
        ))}

      </div>

    </div>
  );
};

export default Rides;