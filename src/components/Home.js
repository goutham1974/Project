import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to AgriGuide</h1>
        <p>Your Complete Agricultural Companion for Best Cultivation Results</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h2>🌱 Crop Information</h2>
          <p>Get detailed information about crops suitable for your soil type and climate conditions</p>
          <Link to="/crops" className="btn btn-primary">Browse Crops</Link>
        </div>

        <div className="feature-card">
          <h2>📖 Step-by-Step Guide</h2>
          <p>Follow comprehensive growing guides with pesticides and fertilizers recommendations</p>
          <Link to="/search" className="btn btn-primary">Search Crops</Link>
        </div>

        <div className="feature-card">
          <h2>👨‍🌾 Farmer Experiences</h2>
          <p>Learn from verified experienced farmers who share their cultivation wisdom</p>
          <Link to="/experiences" className="btn btn-primary">Read Experiences</Link>
        </div>

        <div className="feature-card">
          <h2>👷 Find Workers</h2>
          <p>Discover available agricultural workers in your region with their rates</p>
          <Link to="/workers" className="btn btn-primary">Find Workers</Link>
        </div>

        <div className="feature-card">
          <h2>🚜 Equipment Rental</h2>
          <p>Find agricultural equipment available for rent in your area</p>
          <Link to="/equipment" className="btn btn-primary">Browse Equipment</Link>
        </div>

        <div className="feature-card">
          <h2>💰 Financial Planning</h2>
          <p>Get investment estimates and expected revenue for different crops</p>
          <Link to="/crops" className="btn btn-primary">View Estimates</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
