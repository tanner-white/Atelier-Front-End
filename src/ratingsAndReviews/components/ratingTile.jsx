import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

function RatingTile({ sortByClickFunc, itemMeta, product_data2, setAverageStars }) {
  const [list, setList] = useState(product_data2);
  const [rating, setRating] = useState(3.5);

  function getAvgStars() {
    const resultArray = product_data2.results;
    const ratingArray = resultArray.map((result) => (result.rating));

    let sum = 0;

    for (let i = 0; i < ratingArray.length; i++) {
      sum += ratingArray[i];
    }

    sum /= ratingArray.length;
    const average = Math.round(sum * 10) / 10;

    setAverageStars(average);
    return average;
  }

  function getAvgRec() {
    const resultArray = product_data2.results;
    const recArray = [];
    resultArray.forEach((result) => {
      if (result.recommend) {
        recArray.push(true);
      }
    });

    const avgRec = Math.round((recArray.length / resultArray.length) * 100);
    return avgRec;
  }

  function getStarScores(val) {
    const resultArray = product_data2.results;

    let valCount = 0;

    resultArray.forEach((result) => {
      if (result.rating === val) valCount += 1;
    });

    return valCount;
  }

  function getSizeFeedback() {
    if (Object.keys(itemMeta).length) {
      const metaSize = itemMeta.characteristics;
      const properties = Object.values(metaSize);
      let avg = 0;
      for (var i = 0; i < properties.length; i++ ) {
        let current = parseInt(properties[i].value);
        avg += current;
      }
      avg /= properties.length;
      return avg;
    }
    return 1;
  }

  function getComfortFeedback() {
    if (Object.keys(itemMeta).length) {
      const metaComfort = itemMeta.characteristics.Comfort;
      const val = Math.round(metaComfort.value);
      return val;
    }
    return 1;
  }

  function sortByClick(event) {
    const num = parseInt(event.target.outerText);
    sortByClickFunc(num);
  }

  const productInfo = product_data2;
  const reviewArray = product_data2.results;

  return (
      <div key={productInfo.product} className="rar_reviewData">
        <h3 id="rar_header">Ratings & Reviews</h3>
        <div id="rar_numAndStars">
          <div id="rar_bigNum">{getAvgStars()}</div>
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
            {getAvgRec()}
            % of reviews recommend this product
          </div>
        </div>
        <div id="starRow">
          <li id="rar_barName">
            <button type="submit" id="rar_starButtons" onClick={sortByClick}>5 stars</button>
            <meter id="rar_met" value={getStarScores(5)} min="0" max={reviewArray.length} />
          </li>
          <li id="rar_barName">
            <button type="submit" id="rar_starButtons" onClick={sortByClick}>4 stars</button>
            <meter id="rar_met" value={getStarScores(4)} min="0" max={reviewArray.length} />
          </li>
          <li id="rar_barName">
            <button type="submit" id="rar_starButtons" onClick={sortByClick}>3 stars</button>
            <meter id="rar_met" value={getStarScores(3)} min="0" max={reviewArray.length} />
          </li>
          <li id="rar_barName">
            <button type="submit" id="rar_starButtons" onClick={sortByClick}>2 stars</button>
            <meter id="rar_met" value={getStarScores(2)} min="0" max={reviewArray.length} />
          </li>
          <li id="rar_barName">
            <button type="submit" id="rar_starButtons" onClick={sortByClick}>1 stars</button>
            <meter id="rar_met" value={getStarScores(1)} min="0" max={reviewArray.length} />
          </li>
        </div>
        <div className="rar_dataMeter">
          <p>Size</p>
          <meter id="rar_sizeBar" value={getSizeFeedback()} min="0" max="5" />
          <div id="rar_sizeMeterDiv">
            <div id="rar_sizeMeter">Too small</div>
            <div id="rar_sizeMeter">Perfect</div>
            <div id="rar_sizeMeter">Too large</div>
          </div>

        </div>
        <div className="rar_dataMeter">
          <p>Comfort</p>
          <meter id="rar_comfortBar" value={getComfortFeedback()} min="0" max="5" />

          <div id="rar_comfortMeterDiv">
            <p id="rar_comfortMeter">Poor</p>
            <p id="rar_comfortMeter">Perfect</p>
          </div>
        </div>
      </div>
  );
}

export default RatingTile;
