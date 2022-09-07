import React from 'react';
import StarRatings from 'react-star-ratings';

class RatingTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.product_data2,
      rating: 3.5 || newRating,

    };
  }

  getAvgStars() {
    const resultArray = this.props.product_data2.results;
    const ratingArray = resultArray.map((result) => (result.rating));
    const { setAverageStars } = this.props;

    let sum = 0;

    for (let i = 0; i < ratingArray.length; i++) {
      sum += ratingArray[i];
    }

    sum /= ratingArray.length;
    const average = Math.round(sum * 10) / 10;

    setAverageStars(average);
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

  getStarScores(val) {
    const resultArray = this.props.product_data2.results;

    let valCount = 0;

    resultArray.forEach((result) => {
      if (result.rating === val) valCount += 1;
    });

    return valCount;
  }

  getSizeFeedback() {
    if (!this.props.itemMeta.characteristics) {
      return 0;
    }
    const metaSize = this.props.itemMeta.characteristics;
    let avg = (parseInt(metaSize.Comfort.value) + parseInt(metaSize.Fit.value)
      + parseInt(metaSize.Length.value) + parseInt(metaSize.Quality.value)) / 4;

    return Math.round(avg);
  }

  getComfortFeedback() {
    if (!this.props.itemMeta.characteristics) {
      return 0;
    }
    const metaComfort = this.props.itemMeta.characteristics.Comfort;
    return Math.round(metaComfort.value);
  }

  render() {
    const productInfo = this.props.product_data2;
    const reviewArray = this.props.product_data2.results;
    const { rating } = this.state;
    return (
      <div key={productInfo.product} className="rar_reviewData">
        <h3 id="rar_header">Ratings & Reviews</h3>
        <div id="rar_numAndStars">
          <div id="rar_bigNum">{this.getAvgStars()}</div>
          <span className="rar_boxStars">
            <StarRatings
              rating={rating}
              starRatedColor="#525151"
              starDimension="1.5vw"
              starSpacing="1px"
              numberOfStars={5}
              name="rating"
            />
          </span>
        </div>
        <div>
          <div id="rar_recOverview">
            {this.getAvgRec()}
            % of reviews recommend this product
          </div>
        </div>
        <div id="starRow">
          <li id="rar_barName">
            5 stars
            <meter id="rar_met" value={this.getStarScores(5)} min="0" max={reviewArray.length} />
          </li>
          <li id="rar_barName">
            4 stars
            <meter id="rar_met" value={this.getStarScores(4)} min="0" max={reviewArray.length} />
          </li>
          <li id="rar_barName">
            3 stars
            <meter id="rar_met" value={this.getStarScores(3)} min="0" max={reviewArray.length} />
          </li>
          <li id="rar_barName">
            2 stars
            <meter id="rar_met" value={this.getStarScores(2)} min="0" max={reviewArray.length} />
          </li>
          <li id="rar_barName">
            1 stars
            <meter id="rar_met" value={this.getStarScores(1)} min="0" max={reviewArray.length} />
          </li>
        </div>
        <div className="rar_dataMeter">
          <p>Size</p>
          <meter id="rar_sizeBar" value={this.getSizeFeedback()} min="0" max="5" />
          <div id="rar_sizeMeterDiv">
            <div id="rar_sizeMeter">Too small</div>
            <div id="rar_sizeMeter">Perfect</div>
            <div id="rar_sizeMeter">Too large</div>
          </div>

        </div>
        <div className="rar_dataMeter">
          <p>Comfort</p>
          <meter id="rar_comfortBar" value={this.getComfortFeedback()} min="0" max="5" />
          <div id="rar_comfortMeterDiv">
            <p id="rar_comfortMeter">Poor</p>
            <p id="rar_comfortMeter">Perfect</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RatingTile;
