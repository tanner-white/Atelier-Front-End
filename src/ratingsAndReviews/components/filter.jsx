import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: null,
    };
  }

  render() {
    return (
      <h3 className="rar_sortDropDown">
        # reviews, sorted by:
        <select>
          <option value="0">Relevant</option>
          <option value="1">Helpful</option>
          <option value="2">Newest</option>
        </select>
      </h3>
    );
  }
}

export default Filter;
