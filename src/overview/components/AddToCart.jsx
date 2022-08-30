import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AddToCart({ current }) {
  const [currentSizeQty, setCurrentSizeQty] = useState([]);
  useEffect(() => {
    setCurrentSizeQty(Object.values(current));
  }, [current]);

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <select value="Select size" placeholder="Select size">
        {currentSizeQty.map((item) => <option>{item.size}</option>)}
      </select>
      <select value="quantity">
        {currentSizeQty.map((item) => <option>{item.quantity}</option>)}
      </select>
      <br />
      <button type="button" onClick={handleClick}>Add to bag</button>
      <button type="button">☆</button>
    </form>
  );
}

AddToCart.propTypes = {
  current: PropTypes.shape.isRequired,
};

export default AddToCart;
