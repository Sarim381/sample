import { dummyRides } from "../data/dummyData";

const MyRides = () => {
  return (
    <div className="page">

      <h1>My Rides 📋</h1>

      <div className="my-rides">

        {dummyRides.map((ride) => (
          <div className="history-card" key={ride.id}>

            <div>
              <h3>{ride.vehicle}</h3>

              <p>
                📍 {ride.pickup}
              </p>

              <p>
                🏁 {ride.destination}
              </p>

              <small>{ride.date}</small>
            </div>

            <div>
              <h3>Rs. {ride.fare}</h3>

              <span className="completed">
                {ride.status}
              </span>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default MyRides;