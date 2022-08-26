import React from 'react';
import PropTypes from 'prop-types';

function BasicInfo({ item }) {
  const { category } = item;
  const { name } = item;
  return (
    <div className="basic-info">
      <div>
        ★★★★★
        <span>
          See all reviews...
        </span>
      </div>
      <div>{category}</div>
      <div>{name}</div>
      <small>Price</small>
    </div>
  );
}
BasicInfo.propTypes = {
  item: PropTypes.shape.isRequired,
};
export default BasicInfo;
