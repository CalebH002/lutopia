import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './AccountPage.css';
import Header from '../Components/Header/Header';

const AccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserEmail(user.email);
        setUserId(user.uid);

        const userRef = doc(db, 'users', user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();
          setUsername(userData.username || null);
        } else {
          setUsername('(no username found)');
        }
      } else {
        console.log('User signed out');
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="account-page">
        <h1>{username || 'Loading...'}</h1>

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
