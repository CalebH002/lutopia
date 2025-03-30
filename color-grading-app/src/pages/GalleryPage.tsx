import React from 'react';
import Header from '../Components/Header/Header';
import "./GalleryPage.css"

const GalleryPage: React.FC = () => {
  return (
    <>
    <Header />
      <div className="gallery-container">
        <h1>Gallery Page</h1>
      </div>
    </>
  );
};

export default GalleryPage;