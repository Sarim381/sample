import React from 'react'

const Drivers = () => {
  const drivers = [
    {
      id: 1,
      name: "Bilal Ahmed",
      vehicle: "Honda CD 70",
      type: "Bike",
      status: "Available",
    },
    {
      id: 2,
      name: "Hamza Khan",
      vehicle: "Suzuki Mehran",
      type: "Car",
      status: "Busy",
    },
    {
      id: 3,
      name: "Saad Ali",
      vehicle: "Rickshaw",
      type: "Rickshaw",
      status: "Available",
    },
  ];

  return (
    <div className="page">

      <h1>Drivers 🚗</h1>

      <div className="admin-table">

        {drivers.map((driver) => (
          <div className="table-row" key={driver.id}>

            <span>{driver.name}</span>

            <span>{driver.vehicle}</span>

            <span>{driver.type}</span>

            <span>{driver.status}</span>

            <button>
              View
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Drivers;
