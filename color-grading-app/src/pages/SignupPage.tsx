import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css'; // Ensure you have a CSS file for styling

const SignupPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to home (or dashboard/editor)
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    }
  };

  return (
    <div className="signup-page">
    <div className="auth-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        {error && <p className="auth-error">{error}</p>}
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
