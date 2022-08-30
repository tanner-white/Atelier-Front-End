import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import Thumbnail from './Thumbnail.jsx';

function StyleSelector({
  styles, current, setCurrentStyle, setCurrentPhotos,
}) {
  let price;
  if (current.sale_price) {
    price = (
      <small>
        <s>
          {current.original_price}
        </s>
        {current.sale_price}
      </small>
    );
  } else {
    price = <small>{current.original_price}</small>;
  }
  return (
    <div className="style-selector">
      {price}
      <div>
        <b>Style ﹥</b>
        {current.name}
      </div>
      <div>
        {styles.map((style) => (
          <Thumbnail
            url={style.photos[0].thumbnail_url}
            current={style}
            setCurrentStyle={setCurrentStyle}
            setCurrentPhotos={setCurrentPhotos}
          />
        ))}
      </div>
    </div>
  );
}
StyleSelector.propTypes = {
  styles: PropTypes.shape.isRequired,
  current: PropTypes.shape.isRequired,
  setCurrentPhotos: PropTypes.func.isRequired,
  setCurrentStyle: PropTypes.func.isRequired,
};
export default StyleSelector;
