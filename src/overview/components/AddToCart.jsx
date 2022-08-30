import React, { useState, useEffect } from 'react';

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

export default AddToCart;
