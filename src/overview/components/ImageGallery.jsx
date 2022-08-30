import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ImageGallery({ current }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { length } = current;
  function next() {
    if (current !== length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function previous() {
    if (current !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  return (
    <div className="image-gallery">
      <div className="carousel-left-arrow">&#8249;</div>
      <img className="main-image" src={current[currentIndex]} alt="pants" />
      <div className="carousel-right-arrow">&#8250;</div>
    </div>
  );
}
ImageGallery.propTypes = {
  current: PropTypes.shape.isRequired,
};
export default ImageGallery;
