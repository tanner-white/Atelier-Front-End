import React from 'react';

function Filter({ sortRel, sortHelp, sortNew }) {
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
  };

  return (
    <h3 className="rar_sortDropDown">
      # reviews, sorted by:
      <select id="reviewSelector" onChange={handleSelect.bind(this)}>
        <option value="0">Relevant</option>
        <option value="1">Helpful</option>
        <option value="2">Newest</option>
      </select>
    </h3>
  );
}

export default Filter;
