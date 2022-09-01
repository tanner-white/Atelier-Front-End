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
    </div>
  );
}
ProductDetails.propTypes = {
  product: PropTypes.shape.isRequired,
};
export default ProductDetails;
