/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';

function ImageGallery({ current, currentThumbnails, isDarkMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const { length } = current;
  let classname;
  if (!expanded) {
    classname = 'image-gallery-default';
  } else {
    classname = 'image-gallery-expanded';
  }
  function next() {
    if (currentIndex !== length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function previous() {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }
  function handleExpandedClick(e) {
    e.preventDefault();
    setExpanded(!expanded);
  }
  return (
    <div
      className={classname}
      style={{
        background: isDarkMode ? '#1b242c' : 'white',
        transition: '0.8s background',
      }}
    >
      <img
        className={isDarkMode ? 'full-screen-dark-mode' : 'full-screen'}
        src="https://img.icons8.com/ios/500/full-screen--v2.png"
        alt="wide screen button"
        onClick={handleExpandedClick}
      />
      <div className="thumbnail-selector">
        {currentThumbnails.map((thumbnail, index) => (
          <ImageGalleryThumbnail
            thumbnail={thumbnail}
            index={index}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
          />
        ))}
      </div>
      {current
      && (
      <div className="main-image">
        <ReactImageMagnify {...{
          smallImage: {
            alt: '',
            isFluidWidth: true,
            src: current[currentIndex],
          },
          largeImage: {
            src: current[currentIndex],
            width: 1200,
            height: 1800,
          },
        }}
        />
      </div>
      )}
      {currentIndex > 0
      && <h1 className="carousel-left-arrow" onClick={previous}>&#8249;</h1>}
      {currentIndex < length - 1
      && <h1 className="carousel-right-arrow" onClick={next}>&#8250;</h1>}
    </div>
  );
}
// ImageGallery.propTypes = {
//   current: PropTypes.arrayOf(PropTypes.string).isRequired,
//   currentThumbnails: PropTypes.arrayOf(PropTypes.string).isRequired,
// };
export default ImageGallery;
