import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div>
      <h2>Welcome to the News Aggregator</h2>
      <p>Select a category or log in to view personalized news.</p>
      <div className="home-buttons"> 
        <a href="/news"> 
        <button>View News</button> 
        </a> 
        <a href="/login"> 
        <button>Login</button> 
        </a> 
        <a href="/profile"> 
        <button>Profile</button> 
        </a> 
      </div>
    </div>
  );
};

export default Home;
