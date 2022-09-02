import React from 'react';
import PropTypes from 'prop-types';

function ProductDetails({ product }) {
  // const { slogan } = item;
  // const { description } = item;
  return (
    <div className="product-details">
      <div><h2>{product.slogan}</h2></div>
      <div>{product.description}</div>
      <div className="features">
        ✓ Organic NON-GMO
        ✓ Vegan
        ✓ Cruelty-Free
      </div>
      <div className="social-media-icons">
        <a href="https://twitter.com"><img className="sm-icon twitter" src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="twitter" /></a>
        <a href="https://facebook.com"><img className="sm-icon facebook" src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="facebook" /></a>
        <a href="https://pinterest.com"><img className="sm-icon pinterest" src="https://www.iconpacks.net/icons/1/free-pinterest-icon-113-thumb.png" alt="pinterest" /></a>
      </div>
    </div>
  );
}
ProductDetails.propTypes = {
  product: PropTypes.shape.isRequired,
};
export default ProductDetails;
