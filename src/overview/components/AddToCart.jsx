import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AddToCart({ current }) {
  const [size, setSize] = useState('');
  const [currentSizeQty, setCurrentSizeQty] = useState([]);
  useEffect(() => {
    const { skus } = current;
    if (Object.keys(current).length) {
      setCurrentSizeQty(Object.values(skus));
    }
  }, [current]);

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };
  return (
    <form>
      <select
        value={size}
        name="Select size"
        onChange={handleSizeChange}
      >
        <option>Select size</option>
        {currentSizeQty.map((item) => <option>{item.size}</option>)}
      </select>
      <select value="quantity">
        <option>Quantity</option>
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
