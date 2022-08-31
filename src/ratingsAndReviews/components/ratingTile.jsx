import React from 'react';
import StarRatings from 'react-star-ratings';
import SampleData from './data';

class RatingTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: SampleData,
      rating: 3.5 || newRating,
      fives: 5 || fiveCount,
      fours: 5 || fourCount,
      threes: 5 || threeCount,
      twos: 5 || twoCount,
      ones: 5 || oneCount,
    };
  }

  getAvgStars() {

  }

  getStarScores() {

  }

  getSizeFeedback() {

  }

  getComfortFeedback() {

  }

  render() {
    return (
      <div key={this.state.list.product} className="rar_reviewData">
        <h3>Ratings & Reviews</h3>
        <div id="rar_numAndStars">
          <div id="rar_bigNum">{this.state.rating}</div>
          <span className="rar_boxStars">
            <StarRatings
              rating={this.state.rating}
              starRatedColor="grey"
              starDimension="20px"
              starSpacing="1px"
              numberOfStars={5}
              name="rating"
            />
          </span>
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
