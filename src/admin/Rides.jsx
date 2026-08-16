import { dummyRides } from "../data/dummyData";

const Rides = () => {
  return (
    <div className="page">

      <h1>All Rides 🚕</h1>

      <div className="admin-table">

        {dummyRides.map((ride) => (
          <div className="table-row" key={ride.id}>

            <span>
              #{ride.id}
            </span>

            <span>
              {ride.pickup}
            </span>

            <span>
              {ride.destination}
            </span>

            <span>
              {ride.vehicle}
            </span>

            <span>
              Rs. {ride.fare}
            </span>

            <span>
              {ride.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Rides;