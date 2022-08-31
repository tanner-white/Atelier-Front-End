import React from 'react';
import PropTypes from 'prop-types';

function Thumbnail({
  url, current, setCurrentStyle, setCurrentPhotos, setCurrentThumbnails
}) {
  function handleClick(e) {
    e.preventDefault();
    console.log('click!');
    setCurrentStyle(current);
    setCurrentPhotos(current.photos.map((style) => style.url));
    setCurrentThumbnails(current.photos.map((style) => style.thumbnail_url));
  }

  return (
    <div className="thumbnail-div" onClick={handleClick}>
      <img className="style-thumbnails" src={url} alt="style thumbnail" />
    </div>
  );
}

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  current: PropTypes.shape.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  setCurrentPhotos: PropTypes.func.isRequired,
};

export default Thumbnail;
