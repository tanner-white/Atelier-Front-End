import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function BasicInfo({ product }) {
  function handleClick(e) {
    e.preventDefault();
    ReactDOM.getElementByClassName('rar-section').scrollIntoView();
  }
  return (
    <div className="basic-info">
      <div className="see-reviews">
        ★★★★★
        <span onClick={handleClick}>
          See all reviews...
        </span>
      </div>
      <div>{product.category}</div>
      <h1>{product.name}</h1>
    </div>
  );
}
BasicInfo.propTypes = {
  product: PropTypes.shape.isRequired,
};
export default BasicInfo;
