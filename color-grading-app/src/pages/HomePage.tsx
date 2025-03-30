import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">🎨 LUTopia</h1>
      <p className="home-description">
        Upload your image and apply beautiful LUT filters with our lightweight, open-source web app built for photographers, creators, and developers.
      </p>
      <button className="home-button" onClick={() => navigate('/editor')}>
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
