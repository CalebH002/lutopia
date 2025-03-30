import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left" onClick={() => navigate('/')}>
        <img src="/assets/lutopia-icon.png" alt="LUTopia Icon" className="logo-icon" />
        <img src="/assets/lutopia.png" alt="LUTopia Logo" className="logo-text" />
      </div>
      <div className="header-right">
        {/* Placeholder for user profile icon */}
        <div className="user-icon-placeholder">👤</div>
      </div>
    </header>
  );
};

export default Header;
