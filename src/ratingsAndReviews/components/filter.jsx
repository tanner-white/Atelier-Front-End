import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productReviews: null,
    };
  }

  handleSelect(event) {
    const trigger = event.target.value;
    if (trigger === '0') {
      this.props.sortRel();
    }
    if (trigger === '1') {
      this.props.sortHelp();
    }
    if (trigger === '2') {
      this.props.sortNew();
    }
  }

  render() {
    return (
      <h3 className="rar_sortDropDown">
        # reviews, sorted by:
        <select id="reviewSelector" onChange={this.handleSelect.bind(this)}>
          <option value="0">Relevant</option>
          <option value="1">Helpful</option>
          <option value="2">Newest</option>
        </select>
      </h3>
    );
  }
}

export default Filter;
