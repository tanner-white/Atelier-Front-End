import React from 'react';
import PropTypes from 'prop-types';

function BasicInfo() {
  // const { category } = item;
  // const { name } = item;
  return (
    <div className="basic-info">
      <div>
        ★★★★★
        <span>
          See all reviews...
        </span>
      </div>
      <div>Category</div>
      <div>Name</div>
      <small>Price</small>
    </div>
  );
}
// BasicInfo.propTypes = {
//   item: PropTypes.shape.isRequired,
// };
export default BasicInfo;
