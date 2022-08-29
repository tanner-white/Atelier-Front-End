import React from 'react';
import PropTypes from 'prop-types';

function ProductDetails() {
  // const { slogan } = item;
  // const { description } = item;
  return (
    <div className="product-details">
      <div><h2>Slogan</h2></div>
      <div>This will be the description</div>
      <div>
        ✓ Organic NON-GMO
        ✓ Vegan
        ✓ Cruelty-Free
      </div>
    </div>
  );
}
// ProductDetails.propTypes = {
//   item: PropTypes.shape.isRequired,
// };
export default ProductDetails;
