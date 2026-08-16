import React from 'react'

const Dashboard = () => {
  return (
    <div className="page">
      <h1>Admin Dashboard 🛠️</h1>

      <div className="admin-cards">

        <div className="admin-card">
          <h3>Total Users</h3>
          <h2>120</h2>
        </div>

        <div className="admin-card">
          <h3>Total Drivers</h3>
          <h2>45</h2>
        </div>

        <div className="admin-card">
          <h3>Total Rides</h3>
          <h2>350</h2>
        </div>

        <div className="admin-card">
          <h3>Completed Rides</h3>
          <h2>280</h2>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;