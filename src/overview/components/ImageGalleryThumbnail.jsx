/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

function ImageGalleryThumbnail({ thumbnail, index, setCurrentIndex, currentIndex }) {
  function handleClick(e) {
    e.preventDefault();
    setCurrentIndex(index);
  }
  return (
    index === currentIndex ?
    <img
      onClick={handleClick}
      src={thumbnail}
      alt="style thumbnail"
      className="gallery-thumbnail-current"
      key={index}
    />
    :
    <img
      onClick={handleClick}
      src={thumbnail}
      alt="style thumbnail"
      className="gallery-thumbnail"
      key={index}
    />
  );
}
ImageGalleryThumbnail.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};
export default ImageGalleryThumbnail;
