import React from 'react';

function Filter({ numReviews, sortRel, sortHelp, sortNew, sortOld }) {
  const handleSelect = function(event) {
    const trigger = event.target.value;
    if (trigger === '0') {
      sortRel();
    }
    if (trigger === '1') {
      sortHelp();
    }
    if (trigger === '2') {
      sortNew();
    }
    if (trigger === '3') {
      sortOld();
    }
  };

  return (
    <h3 className="rar_sortDropDown">
      {numReviews + ' '}
      reviews, sorted by
      <select id="reviewSelector" onChange={handleSelect.bind(this)}>
        <option value="0">relevance</option>
        <option value="1">helpfulness</option>
        <option value="2">newest</option>
        <option value="3">oldest</option>
      </select>
    </h3>
  );
}

export default Filter;
