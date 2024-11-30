import React from 'react';
import '../pages/Profile.css';

const ProfileHeader = () => {
  return (
    <div className="header">
      <div className="logo">News Aggregator</div>
      <div className="search-bar">
        <input type="text" placeholder="Search news..." />
        <button>Search</button>
      </div>
      <div className="user-profile">
        <img src="profile-pic-url" alt="User Profile" />
      </div>
    </div>
  );
};

export default ProfileHeader;
