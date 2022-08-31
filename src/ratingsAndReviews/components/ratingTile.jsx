import React from 'react';
import StarRatings from 'react-star-ratings';

class RatingTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.product_data2,
      rating: 3.5 || newRating,
      fives: 5 || fiveCount,
      fours: 5 || fourCount,
      threes: 5 || threeCount,
      twos: 5 || twoCount,
      ones: 5 || oneCount,
    };
  }

  getAvgStars() {
    const resultArray = this.props.product_data2.results;
    const ratingArray = resultArray.map((result) => (result.rating));

    let sum = 0;

    for (let i = 0; i < ratingArray.length; i++) {
      sum += ratingArray[i];
    }

    sum /= ratingArray.length;
    const average = Math.round(sum * 10) / 10;

    return average;
  }

  getAvgRec() {
    const resultArray = this.props.product_data2.results;
    const recArray = [];

    resultArray.forEach((result) => {
      if (result.recommend) {
        recArray.push(true);
      }
    });

    const avgRec = Math.round((recArray.length / resultArray.length) * 100);

    return avgRec;
  }

  getStarScores() {
    const resultArray = this.props.product_data2.results;
  }

  getSizeFeedback() {

  }

  getComfortFeedback() {

  }

  render() {
    this.getAvgStars();
    return (
      <div key={this.state.list.product} className="rar_reviewData">
        <h3>Ratings & Reviews</h3>
        <div id="rar_numAndStars">
          <div id="rar_bigNum">{this.getAvgStars()}</div>
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
          <div>
            {this.getAvgRec()}
            % of reviews recommend this product
          </div>
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
