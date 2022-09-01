import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import StarRatings from 'react-star-ratings';
import RatingsApp from '/Users/tannerwhite/HackReactor/FEC/rfc2207-FEC/src/ratingsAndReviews/RatingsApp.jsx'

function BasicInfo({ product }) {
  const myRef = useRef(RatingsApp);
  function executeScroll() {
    myRef.current.ScrollIntoView();
  }
  function handleClick(e) {
    e.preventDefault();
    window.RatingsApp.prototype.ScrollIntoView();
  }

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
        <small onClick={handleClick}>
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
