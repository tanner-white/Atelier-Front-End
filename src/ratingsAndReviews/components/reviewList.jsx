import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewTile from './reviewTile.jsx';
// eslint-disable-next-line import/extensions
import RatingTile from './ratingTile.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [1, 2, 3],
    };
  }

  render() {
    return (
      <div className="rar_section">
        <div className="rar_ratingBox"><RatingTile /></div>
        <div className="rar_tileBox">
          <ReviewTile tiles={this.state.tiles} />
          <div className="rar_reviewButtons">
            <button className="button" type="submit" id="moreReviews">MORE REVIEWS</button>
            <button className="button" type="submit">ADD A REVIEW +</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewList;
