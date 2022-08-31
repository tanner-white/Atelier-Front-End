import React from 'react';
import PropTypes from 'prop-types';

function ImageGalleryThumbnail({ thumbnail, index, setCurrentIndex }) {
  function handleClick(e) {
    e.preventDefault();
    setCurrentIndex(index);
  }
  return (
    <img
      onClick={handleClick}
      src={thumbnail}
      alt="style thumbnail"
      className="gallery-thumbnail"
      key={index}
    />
  );
}
export default ImageGalleryThumbnail;
