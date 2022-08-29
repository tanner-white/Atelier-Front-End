import React, { useState } from 'react';

function ImageGallery({ current }) {
  const [currentPhotos, setCurrentPhotos] = useState('');
  const { photos } = current;
  return (
    <div className="image-gallery">
      <img className="main-image" src="https://media.wired.com/photos/611c5312798f0e2c853b702f/1:1/w_993,h_993,c_limit/Gear-Cargo-Pants-are-Back-1302952122.jpg" alt="pants" />
    </div>
  );
}

export default ImageGallery;
