import React from 'react';
import StarRatings from 'react-star-ratings';

class RatingTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.product_data2,
      rating: 3.5 || newRating,
      fives: 0,
      fours: 0,
      threes: 0,
      twos: 0,
      ones: 0,
    };
  }

  componentDidMount() {
    console.log(this.props);
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
    console.log(resultArray);
    resultArray.forEach((result) => {
      if (result.recommend) {
        recArray.push(true);
      }
    });

    const avgRec = Math.round((recArray.length / resultArray.length) * 100);

    return avgRec;
  }

  getStarScores(val) {
    const resultArray = this.props.product_data2.results;

    let valCount = 0;

    resultArray.forEach((result) => {
      if (result.rating === val) valCount += 1;
    });

    return valCount;
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
          <li id="rar_barName">
            5 stars
            <meter value={this.getStarScores(5)} min="0" max={this.props.product_data2.results.length}/>
          </li>
          <li id="rar_barName">
            4 stars
            <meter value={this.getStarScores(4)} min="0" max={this.props.product_data2.results.length}/>
          </li>
          <li id="rar_barName">
            3 stars
            <meter value={this.getStarScores(3)} min="0" max={this.props.product_data2.results.length}/>
          </li>
          <li id="rar_barName">
            2 stars
            <meter value={this.getStarScores(2)} min="0" max={this.props.product_data2.results.length}/>
          </li>
          <li id="rar_barName">
            1 stars
            <meter value={this.getStarScores(1)} min="0" max={this.props.product_data2.results.length}/>
          </li>
        </div>
        <div>Size Bar</div>
        <div>Comfort Bar</div>
      </div>
    );
  }
}

export default RatingTile;
