/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';

function BasicInfo({
  product, scrollToReviews, numberReviews, averageStars,
}) {
  function handleReviewClick(e) {
    e.preventDefault();
    scrollToReviews();
  }
  return (
    <div className="basic-info">
      <div className="see-reviews">
        {averageStars > 0 && (
        <StarRatings
          rating={averageStars}
          starRatedColor="black"
          starDimension="1vw"
          starSpacing="1px"
          numberOfStars={5}
          name="rating"
        />
        )}
        {numberReviews > 0 && (
        <small onClick={handleReviewClick}>
          &nbsp;Read all (
          {numberReviews}
          ) reviews
        </small>
        )}
      </div>
      <div className="product-category">{product.category && product.category.toUpperCase()}</div>
      <h2 className="product-name">{product.name}</h2>
    </div>
  );
}
BasicInfo.propTypes = {
  product: PropTypes.shape.isRequired,
};
export default BasicInfo;
