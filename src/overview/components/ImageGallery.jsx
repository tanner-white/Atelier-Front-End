import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ImageGallery({ current }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { length } = current;
  function next() {
    if (currentIndex !== length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
    }
  }
  function previous() {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
    }
  }
  return (
    <div className="image-gallery">
      <div className="carousel-left-arrow" onClick={previous}>&#8249;</div>
      <img className="main-image" src={current[currentIndex]} alt="pants" />
      <div className="carousel-right-arrow" onClick={next}>&#8250;</div>
    </div>
  );
}
ImageGallery.propTypes = {
  current: PropTypes.shape.isRequired,
};
export default ImageGallery;
