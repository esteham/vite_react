// src/components/exampleCarouselImage.jsx
import React from 'react';
import Image from 'react-bootstrap/Image';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div className="d-block w-100 bg-secondary text-white d-flex align-items-center justify-content-center" style={{ height: '400px' }}>
      <h2>{text}</h2>
    </div>
  );
};

export default ExampleCarouselImage;
