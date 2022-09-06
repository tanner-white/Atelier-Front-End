import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Thumbnail from './Thumbnail.jsx';

function StyleSelector({
  styles, current, setCurrentStyle, setCurrentPhotos, setCurrentThumbnails,
}) {
  const [currentThumb, setCurrentThumb] = useState('');
  useEffect(() => {
    if (styles.length) {
      setCurrentThumb(styles[0].photos[0].thumbnail_url);
    }
  }, [styles]);
  let price;
  if (current.sale_price) {
    price = (
      <small className="price">
        <s>
          $
          {current.original_price}
        </s>
        <span className="sale-price">
          $
          {current.sale_price}
        </span>
      </small>
    );
  } else {
    price = (
      <small className="price">
        $
        {current.original_price}
      </small>
    );
  }
  return (
    <div className="style-selector">
      {price}
      <div className="style-name">
        <b>Style ﹥</b>
        {current.name}
      </div>
      <div className="style-thumbnails">
        {styles.map((style) => (
          <Thumbnail
            url={style.photos[0].thumbnail_url}
            current={style}
            currentThumb={currentThumb}
            setCurrentStyle={setCurrentStyle}
            setCurrentPhotos={setCurrentPhotos}
            setCurrentThumbnails={setCurrentThumbnails}
            setCurrentThumb={setCurrentThumb}
          />
        ))}
      </div>
    </div>
  );
}
StyleSelector.propTypes = {
  styles: PropTypes.objectOf.isRequired,
  current: PropTypes.objectOf.isRequired,
  setCurrentPhotos: PropTypes.func.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
  setCurrentThumbnails: PropTypes.func.isRequired,
};
export default StyleSelector;
