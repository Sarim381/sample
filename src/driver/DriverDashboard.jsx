import React from 'react'

const DriverDashboard = () => {
  return (
    <div className="page">

      <h1>Driver Dashboard 🚗</h1>

      <div className="admin-cards">

        <div className="admin-card">
          <h3>Available Rides</h3>
          <h2>8</h2>
        </div>

        <div className="admin-card">
          <h3>Completed Trips</h3>
          <h2>25</h2>
        </div>

        <div className="admin-card">
          <h3>Today's Earnings</h3>
          <h2>Rs. 3,500</h2>
        </div>

      </div>

    </div>
  );
};

export default DriverDashboard;
