import React from 'react';

function AddToCart() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  const qtys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <form>
      <select value="Select size" placeholder="Select size">
        <option>S</option>
        <option>M</option>
        <option>L</option>
        <option>XL</option>
      </select>
      <select value="quantity">
        {qtys.map((number) => <option>{number}</option>)}
      </select>
      <br />
      <button type="button" onClick={handleClick}>Add to bag</button>
      <button type="button">☆</button>
    </form>
  );
}

export default AddToCart;
