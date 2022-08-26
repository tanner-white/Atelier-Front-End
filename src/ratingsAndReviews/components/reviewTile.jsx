import React from 'react';
import SampleData from './data';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: SampleData,
    };
  }

  render() {
    return (
      <div className="tile">
        <div id="stars">Stars</div>
        <div id="user-date-stamp">User, Date</div>
        <h4 id="summary">Summary</h4>
        <p id="body">Body</p>
        <div id="recommendation">Recommendation</div>
        <div id="responses">Responses</div>
        <div id="pics">
          <img alt="failed to load" src="http://www.placebear.com/75/55" />
          <img alt="failed to load" src="http://www.placebear.com/72/52" />
          <img alt="failed to load" src="http://www.placebear.com/70/50" />
        </div>
        <button type="submit" id="moreReviews">MORE REVIEWS</button>
        <button type="submit">ADD REVIEW</button>
      </div>
    );
  }
}

export default ReviewTile;
