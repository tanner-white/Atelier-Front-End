import React from 'react';
import PropTypes from 'prop-types';

function BasicInfo({ product }) {
  return (
    <div className="basic-info">
      <div>
        ★★★★★
        <span>
          See all reviews...
        </span>
      </div>
      <div>{product.category}</div>
      <div>{product.name}</div>
    </div>
  );
}
BasicInfo.propTypes = {
  product: PropTypes.shape.isRequired,
};
export default BasicInfo;
