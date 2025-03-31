import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './Header.css';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserEmail(user?.email || null);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-left" >
        <img src="/assets/lutopia-icon.png" alt="LUTopia Icon" className="logo-icon" onClick={() => navigate('/')} />
        <img src="/assets/lutopia.png" alt="LUTopia Logo" className="logo-text" onClick={() => navigate('/')} />

        <div className="nav-buttons">
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>

      <div className="header-right">
        {/* Login / Signup or user info */}
        <div className="auth-links">
          {userEmail ? (
            <>
              <span className="user-email">{userEmail}</span>
              <button onClick={handleLogout} className="auth-button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="auth-button">Log In</Link>
              <Link to="/signup" className="auth-button">Sign Up</Link>
            </>
          )}
        </div>

        <div className="user-icon-placeholder" onClick={()=>navigate('/account')}>👤</div>
      </div>
    </header>
  );
};

export default Header;
