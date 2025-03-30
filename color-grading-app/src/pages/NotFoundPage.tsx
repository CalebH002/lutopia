import React from 'react';
import Header from '../Components/Header/Header';
import "./NotFoundPage.css"

const NotFoundPage: React.FC = () => {
  return (
    <>
    <Header />
      <div className="notfound-container">
        <h1>Oops... Page was not found</h1>
      </div>
    </>
  );
};

export default NotFoundPage;
