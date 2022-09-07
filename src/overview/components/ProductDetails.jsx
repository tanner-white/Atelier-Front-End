/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

function ProductDetails({ product, isDarkMode }) {
  let features;
  if (Object.keys(product).length) {
    features = product.features;
  }
  return (
    <div className="details-and-features">
      <div className="product-details">
        <div><h2 className="slogan">{product.slogan}</h2></div>
        <div className="description">{product.description}</div>
        <div className={isDarkMode ? 'social-media-icons-dark-mode' : 'social-media-icons'}>
          <a href="https://twitter.com"><img className="sm-icon twitter" src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="twitter" /></a>
          <a href="https://facebook.com"><img className="sm-icon facebook" src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="facebook" /></a>
          <a href="https://pinterest.com"><img className="sm-icon pinterest" src="https://www.iconpacks.net/icons/1/free-pinterest-icon-113-thumb.png" alt="pinterest" /></a>
        </div>
      </div>
      {features
      && (
      <div className="features">
        {features.map((feature) => (
          <div>
            ✓&nbsp;
            {feature.feature}
            :
            {' '}
            {feature.value}
          </div>
        ))}
      </div>
      )}
    </div>
  );
}
// ProductDetails.propTypes = {
//   product: PropTypes.shape.isRequired,
// };
export default ProductDetails;
