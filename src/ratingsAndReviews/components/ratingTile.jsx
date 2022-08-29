import React from 'react';
import SampleData from './data';

class RatingTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: SampleData,
    };
  }

  render() {
    console.log(this.state.list);
    return (
      <div className="rar_reviewData">
        Ratings & Reviews
        <div id="stars">
          { /*`${this.state.list.count} `*/ }
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <div>
          <div>VAR% of reviews recommend this product</div>
        </div>
      </div>
    );
  }
}

export default RatingTile;
