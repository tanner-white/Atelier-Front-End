import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';

function ImageGallery({ current, currentThumbnails }) {
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
      <div className="thumbnail-selector">
        {currentThumbnails.map((thumbnail, index) => (
          <ImageGalleryThumbnail
            thumbnail={thumbnail}
            index={index}
            setCurrentIndex={setCurrentIndex}
          />
        ))}
      </div>
      <img className="main-image" src={current[currentIndex]} alt="pants" />
      {currentIndex > 0
      && <h1 className="carousel-left-arrow" onClick={previous}>&#8249;</h1>}
      {currentIndex < length - 1
      && <h1 className="carousel-right-arrow" onClick={next}>&#8250;</h1>}
    </div>
  );
}
ImageGallery.propTypes = {
  current: PropTypes.shape.isRequired,
};
export default ImageGallery;
