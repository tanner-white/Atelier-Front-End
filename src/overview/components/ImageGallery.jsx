import React from 'react';
import PropTypes from 'prop-types';

function ImageGallery({ current }) {
  return (
    <div className="image-gallery">
      <img className="main-image" src={current[0]} alt="pants" />
    </div>
  );
}
ImageGallery.propTypes = {
  current: PropTypes.shape.isRequired,
};
export default ImageGallery;
