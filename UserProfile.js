import React from 'react';

const UserProfile = ({ user, handleLogout }) => (
  <div>
    <h2>Welcome, {user.appUserName}!</h2>
    <p>Your User ID: {user.appUserId}</p>
    <button onClick={handleLogout} className="logout-btn">
      Log Out
    </button>
  </div>
);

export default UserProfile;
