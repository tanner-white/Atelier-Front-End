import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

function RatingTile({ sortByClickFunc, itemMeta, product_data2, setAverageStars, isDarkMode }) {
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
    if (Object.keys(itemMeta).length > 0) {
      const metaComfort = itemMeta.characteristics.Size;
      if (metaComfort) {
        const val = Math.round(metaComfort.value);
        return val;
      }
    }
    return 1;
  }

  function getWidthFeedback() {
    if (Object.keys(itemMeta).length > 0) {
      const metaComfort = itemMeta.characteristics.Fit;
      if (metaComfort) {
        const val = Math.round(metaComfort.value);
        return val;
      }
    }
    return 1;
  }

  function getComfortFeedback() {
    if (Object.keys(itemMeta).length > 0) {
      const metaComfort = itemMeta.characteristics.Comfort;
      if (metaComfort) {
        const val = Math.round(metaComfort.value);
        return val;
      }
    }
    return 1;
  }

  function getQualityFeedback() {
    if (Object.keys(itemMeta).length > 0) {
      const metaComfort = itemMeta.characteristics.Quality;
      if (metaComfort) {
        const val = Math.round(metaComfort.value);
        return val;
      }
    }
    return 1;
  }

  function getLengthFeedback() {
    if (Object.keys(itemMeta).length > 0) {
      const metaComfort = itemMeta.characteristics.Length;
      if (metaComfort) {
        const val = Math.round(metaComfort.value);
        return val;
      }
    }
    return 1;
  }

  function getFitFeedback() {
    if (Object.keys(itemMeta).length > 0) {
      const metaComfort = itemMeta.characteristics.Fit;
      if (metaComfort) {
        const val = Math.round(metaComfort.value);
        return val;
      }
    }
    return 1;
  }

  function sortByClick(event) {
    const num = parseInt(event.target.outerText);
    sortByClickFunc(num);
  }

  const productInfo = product_data2;
  const reviewArray = product_data2.results;

  const darkModeButton = { color: isDarkMode ? '#BDDEDB' : 'black', background: isDarkMode ? '#1b242c' : 'white' };
  const darkMode = { 'background-image': isDarkMode ? 'linear-gradient(90deg, #BDDEDB 50%, #BDDEDB 100%)' : 'linear-gradient(90deg, #525151 50%, #525151 100%)', 'background': isDarkMode ? 'white' :'rgb(233, 233, 233)' };

  return (
    <div key={productInfo.product} className="rar_reviewData" style={{ color: isDarkMode ? '#BDDEDB' : 'black' }}>
      <h3 id="rar_header">Ratings & Reviews</h3>
      <div id="rar_numAndStars">
        <div id="rar_bigNum" style={{ color: isDarkMode ? '#BDDEDB' : 'black'}}>{getAvgStars()}</div>
        <span className="rar_boxStars">
          <StarRatings
            rating={rating}
            starRatedColor={isDarkMode ? '#ffd700' : '#525151'}
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
          <button type="submit" style={darkModeButton} id="rar_starButtons" onClick={sortByClick}>5 stars</button>
          <meter id="rar_met" value={getStarScores(5)} min="0" max={reviewArray.length} />
        </li>
        <li id="rar_barName">
          <button type="submit" style={darkModeButton} id="rar_starButtons" onClick={sortByClick}>4 stars</button>
          <meter id="rar_met" value={getStarScores(4)} min="0" max={reviewArray.length} />
        </li>
        <li id="rar_barName">
          <button type="submit" style={darkModeButton} id="rar_starButtons" onClick={sortByClick}>3 stars</button>
          <meter id="rar_met" value={getStarScores(3)} min="0" max={reviewArray.length} />
        </li>
        <li id="rar_barName">
          <button type="submit" style={darkModeButton} id="rar_starButtons" onClick={sortByClick}>2 stars</button>
          <meter id="rar_met" value={getStarScores(2)} min="0" max={reviewArray.length} />
        </li>
        <li id="rar_barName">
          <button type="submit" style={darkModeButton} id="rar_starButtons" onClick={sortByClick}>1 stars</button>
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
        <p>Width</p>
        <meter id="rar_widthBar" value={getWidthFeedback()} min="0" max="5" />

        <div id="rar_widthMeterDiv">
          <p id="rar_widthMeter">Too narrow</p>
          <p id="rar_widthMeter">Perfect</p>
          <p id="rar_widthMeter">Too wide</p>
        </div>
      </div>
      <div className="rar_dataMeter">
        <p>Length</p>
        <meter id="rar_lengthBar" value={getLengthFeedback()} min="0" max="5" />

        <div id="rar_lengthMeterDiv">
          <p id="rar_lengthMeter">Runs short</p>
          <p id="rar_lengthMeter">Perfect</p>
          <p id="rar_lengthMeter">Runs long</p>
        </div>
      </div>
      <div className="rar_dataMeter">
        <p>Fit</p>
        <meter id="rar_fitBar" value={getFitFeedback()} min="0" max="5" />

        <div id="rar_fitMeterDiv">
          <p id="rar_fitMeter">Runs tight</p>
          <p id="rar_fitMeter">Perfect</p>
          <p id="rar_fitMeter">Runs long</p>
        </div>
      </div>
      <div className="rar_dataMeter">
        <p>Comfort</p>
        <meter id="rar_comfortBar" value={getComfortFeedback()} min="0" max="5" />

        <div id="rar_comfortMeterDiv">
          <p id="rar_comfortMeter">Uncomfortable</p>
          <p id="rar_comfortMeter">Perfect</p>
        </div>
      </div>
      <div className="rar_dataMeter">
        <p>Quality</p>
        <meter id="rar_qualityBar" value={getQualityFeedback()} min="0" max="5" />

        <div id="rar_qualityMeterDiv">
          <p id="rar_qualityMeter">Poor</p>
          <p id="rar_qualityMeter">Perfect</p>
        </div>
      </div>
    </div>
  );
}

export default RatingTile;
