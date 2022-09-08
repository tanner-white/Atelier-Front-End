/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx';

function ImageGallery({ current, currentThumbnails, isDarkMode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [displayedThumbnails, setDisplayedThumbnails] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(3);
  useEffect(() => {
    setFirstIndex(0);
    setLastIndex(7);
  }, [currentThumbnails]);
  useEffect(() => {
    setDisplayedThumbnails(currentThumbnails.slice(firstIndex, lastIndex));
  }, [currentThumbnails]);
  useEffect(() => {
    setDisplayedThumbnails(currentThumbnails.slice(firstIndex, lastIndex));
  }, [firstIndex, lastIndex]);

  const goToNextSlide = () => {
    setFirstIndex(firstIndex + 1);
    setLastIndex(lastIndex + 1);
  };

  const goToPreviousSlide = () => {
    setFirstIndex(firstIndex - 1);
    setLastIndex(lastIndex - 1);
  };
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
      <div></div>
      <img
        className={isDarkMode ? 'full-screen-dark-mode' : 'full-screen'}
        src="https://img.icons8.com/ios/500/full-screen--v2.png"
        alt="wide screen button"
        onClick={handleExpandedClick}
      />
      <div className="thumbnail-selector">
        {displayedThumbnails.map((thumbnail, index) => (
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
      {firstIndex > 0
      && <h1 className="carousel-up-arrow" onClick={goToPreviousSlide}>&and;</h1>}
      {currentThumbnails.length > 7 && lastIndex !== currentThumbnails.length
      && <h1 className="carousel-down-arrow" onClick={goToNextSlide}>&or;</h1>}
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
