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
      <div key={this.state.list.product} className="rar_reviewData">
        Ratings & Reviews
        <div id="rar_stars">
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
        <div>
          <li>
            5 stars
            <meter />
          </li>
          <li>
            4 stars
            <meter />
          </li>
          <li>
            3 stars
            <meter />
          </li>
          <li>
            2 stars
            <meter />
          </li>
          <li>
            1 stars
            <meter />
          </li>
        </div>
        <div>Size Bar</div>
        <div>Comfort Bar</div>
      </div>
    );
  }
}

export default RatingTile;
