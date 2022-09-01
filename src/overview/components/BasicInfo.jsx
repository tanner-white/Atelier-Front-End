import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

function BasicInfo({ product }) {
  return (
    <div className="basic-info">
      <div className="see-reviews">
        <StarRatings
          rating={3.6}
          starRatedColor="black"
          starDimension="15px"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
        <small>
          &nbsp;See all reviews...
        </small>
      </div>
      <div>{product.category}</div>
      <h1 className="product-name">{product.name}</h1>
    </div>
  );
}
BasicInfo.propTypes = {
  product: PropTypes.shape.isRequired,
};
export default BasicInfo;
