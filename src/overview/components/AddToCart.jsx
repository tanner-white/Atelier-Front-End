/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AddToCart({ current, isDarkMode }) {
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [availableQty, setAvailableQty] = useState([]);
  const [currentSizeQty, setCurrentSizeQty] = useState([]);
  useEffect(() => {
    const { skus } = current;
    if (Object.keys(current).length) {
      setCurrentSizeQty(Object.values(skus));
    }
  }, [current]);
  useEffect(() => {
    currentSizeQty.forEach((item) => {
      if (item.size === size) {
        let x = 1;
        const qtys = [];
        while (x < item.quantity) {
          qtys.push(x);
          x += 1;
        }
        setAvailableQty(qtys);
      }
    });
  }, [size, currentSizeQty]);

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  };
  const handleQtyChange = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };
  return (
    <form>
      <select
        style={{ background: isDarkMode ? '#E2ECEB' : 'white' }}
        className="size-select"
        value={size}
        name="Select size"
        onChange={handleSizeChange}
      >
        <option>SELECT SIZE</option>
        {currentSizeQty.map((item, index) => <option key={index}>{item.size}</option>)}
      </select>
      <select
        style={{ background: isDarkMode ? '#E2ECEB' : 'white' }}
        className="quantity-select"
        value={quantity}
        name="Quantity select"
        onChange={handleQtyChange}
      >
        <option>QUANTITY</option>
        {availableQty.length && availableQty.slice(0, 15).map((num) => <option>{num}</option>)}
      </select>
      <br />
      <button
        className="add-to-bag"
        type="button"
        style={{ background: isDarkMode ? '#E2ECEB' : 'white' }}
      >
        ADD TO BAG

      </button>
      <button
        className="add-to-outfit"
        type="button"
        style={{ background: isDarkMode ? '#E2ECEB' : 'white' }}
      >
        ☆

      </button>
    </form>
  );
}

AddToCart.propTypes = {
  current: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.shape({
      feature: PropTypes.string,
      value: PropTypes.string,
    })),
  }).isRequired,
};

export default AddToCart;
