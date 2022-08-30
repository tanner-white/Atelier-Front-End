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
    return (
      <div key={this.state.list.product} className="rar_reviewData">
        <h3>Ratings & Reviews</h3>
        <div id="rar_numAndStars">
          <div id="rar_bigNum">3.5</div>
          <span className="rar_boxStars">☆☆☆☆☆</span>
        </div>
        <div>
          <div>VAR% of reviews recommend this product</div>
        </div>
        <div id="starRow">
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
