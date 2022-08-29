import React from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail.jsx';

function StyleSelector({ styles }) {
  return (
    <div className="style-selector">
      <div>Style ﹥ Style Name</div>
      <div>
        {/* {styles.results.map((style) => <Thumbnail url={style.photos[0].thumbnail_url} />)} */}
      </div>
    </div>
  );
}
StyleSelector.propTypes = {
  styles: PropTypes.shape.isRequired,
};
export default StyleSelector;
