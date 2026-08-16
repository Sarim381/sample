import React from 'react'

const Profile = () => {
  return (
    <div className="page">

      <h1>My Profile 👤</h1>

      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h2>Demo User</h2>

        <p>Email: demo@bhairider.com</p>
        <p>Phone: 0300-1234567</p>

        <button>
          Edit Profile
        </button>

      </div>

    </div>
  );
};

export default Profile;
