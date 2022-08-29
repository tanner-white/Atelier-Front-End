import React from 'react';

function Thumbnail({ url, current, setCurrentStyle }) {
  function handleClick(e) {
    e.preventDefault();
    console.log('click!');
    setCurrentStyle(current);
  }
  return (
    <div className="thumbnail-div" onClick={handleClick}>
      <img className="style-thumbnails" src={url} alt="style thumbnail" />
    </div>
  );
}

export default Thumbnail;
