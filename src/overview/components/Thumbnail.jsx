/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Thumbnail({
  url, current, setCurrentStyle, setCurrentPhotos, setCurrentThumbnails, setCurrentThumb,
  currentThumb,
}) {
  function handleClick(e) {
    e.preventDefault();
    setCurrentStyle(current);
    setCurrentPhotos(current.photos.map((style) => style.url));
    setCurrentThumbnails(current.photos.map((style) => style.thumbnail_url));
    setCurrentThumb(url);
  }

  return (
    <div className="thumbnail-div" onClick={handleClick}>
      <img className="style-thumbnails" src={url} alt="style thumbnail" />
      {currentThumb === url && <div id="current-thumb">✓</div>}
    </div>
  );
}

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  current: PropTypes.shape.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  setCurrentPhotos: PropTypes.func.isRequired,
  setCurrentThumbnails: PropTypes.func.isRequired,
};

export default Thumbnail;
