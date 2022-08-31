import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Thumbnail from './Thumbnail.jsx';

function StyleSelector({
  styles, current, setCurrentStyle, setCurrentPhotos, setCurrentThumbnails
}) {
  let price;
  if (current.sale_price) {
    price = (
      <small className="price">
        <s>
          {current.original_price}
        </s>
        <span className="sale-price">{current.sale_price}</span>
      </small>
    );
  } else {
    price = <small className="price">{current.original_price}</small>;
  }
  return (
    <div className="style-selector">
      {price}
      <div>
        <b>Style ﹥</b>
        {current.name}
      </div>
      <div className="style-thumbnails">
        {styles.map((style) => (
          <Thumbnail
            url={style.photos[0].thumbnail_url}
            current={style}
            setCurrentStyle={setCurrentStyle}
            setCurrentPhotos={setCurrentPhotos}
            setCurrentThumbnails={setCurrentThumbnails}
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
};
export default StyleSelector;
