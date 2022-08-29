import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: null,
    };
  }

  render() {
    return (
      <div className="rar_sortDropDown">
        # reviews, sorted by:
        <select>
          <option value="0">Relavant</option>
          <option value="1">Helpful</option>
          <option value="2">Newest</option>
        </select>
      </div>
    );
  }
}

export default Filter;
