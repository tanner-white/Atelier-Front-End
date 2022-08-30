import React from 'react';

function AddToCart() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <button type="button">Select size</button>
      <button type="button">Qty</button>
      <br />
      <button type="button" onClick={handleClick}>Add to bag</button>
      <button type="button">☆</button>
    </div>
  );
}

export default AddToCart;
