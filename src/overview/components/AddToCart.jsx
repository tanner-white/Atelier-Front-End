import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function AddToCart({ current }) {
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

  const handleClick = (e) => {
    e.preventDefault();
  };
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
        className="size-select"
        value={size}
        name="Select size"
        onChange={handleSizeChange}
      >
        <option>Select size</option>
        {currentSizeQty.map((item, index) => <option key={index}>{item.size}</option>)}
      </select>
      <select
        className="quantity-select"
        value={quantity}
        name="Quantity select"
        onChange={handleQtyChange}
      >
        <option>Quantity</option>
        {availableQty.length && availableQty.slice(0, 15).map((num) => <option>{num}</option>)}
      </select>
      <br />
      <button className="add-to-bag" type="button" onClick={handleClick}>Add to bag</button>
      <button className="add-to-outfit" type="button">☆</button>
    </form>
  );
}

AddToCart.propTypes = {
  current: PropTypes.objectOf.isRequired,
};

export default AddToCart;
