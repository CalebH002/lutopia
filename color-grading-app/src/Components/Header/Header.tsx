import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  let navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <header className="header">
      <div className="header-left">
        <img src="/assets/lutopia-icon.png" alt="LUTopia Icon" className="logo-icon" onClick={() => navigate('/')} />
        <img src="/assets/lutopia.png" alt="LUTopia Logo" className="logo-text" onClick={() => navigate('/')} />

        <div className="nav-buttons">
           <Link to="/gallery">Gallery</Link>
           <Link to="/about">About</Link>
           <Link to="/help">Help</Link>
        </div>

      </div>
      <div className="header-right">
        {/* Placeholder for user profile icon */}
        <div className="user-icon-placeholder">👤</div>
      </div>
    </header>
  );
};

export default Header;
