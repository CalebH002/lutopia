import React, { useEffect } from 'react';
import { auth } from '../firebase';

const FirebaseTest: React.FC = () => {
  useEffect(() => {
    console.log('Firebase Auth instance:', auth);
  }, []);

  return <h2>Firebase is set up ✅ — check the console</h2>;
};

export default FirebaseTest;
