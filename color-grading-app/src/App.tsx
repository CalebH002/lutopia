import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import GalleryPage from './pages/GalleryPage';
import HelpPage from './pages/HelpPage';
import AccountPage from './pages/AccountPage';
import FirebaseTest from './pages/FireBaseTest';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test-firebase" element={<FirebaseTest />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path= "/help" element={<HelpPage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </Router>
  );
};

export default App;
