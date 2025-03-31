import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './AccountPage.css';
import Header from '../Components/Header/Header';

const AccountPage: React.FC = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is still logged in:", user.email);
    } else {
      navigate('/login'); // Redirect to login if no user is authenticated
      console.log("User is signed out");
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <>
    <Header />
    <div className="account-page">
      <h1>My Account</h1>

      <div className="account-info">
        <div className="profile-picture-placeholder">👤</div>
        <div className="account-details">
          <p><strong>Email:</strong> {userEmail}</p>
          <p><strong>User ID:</strong> {userId}</p>
        </div>
      </div>

      <div className="edited-photos-section">
        <h2>Edited Photos</h2>
        <div className="photo-grid">
          {/* Replace these with dynamic content later */}
          <div className="photo-placeholder">📷</div>
          <div className="photo-placeholder">📷</div>
          <div className="photo-placeholder">📷</div>
        </div>
      </div>
    </div>
  </>
  );
};

export default AccountPage;
