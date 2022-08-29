import React from 'react';
import SampleData from './data';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: SampleData,
      all: [], // on event this list will populate by two
    };
  }

  render() {
    return (this.state.list.results.map((review) => (
      <div className="tile" id={review.review_id}>
        <div className="reviewData">
          <div id="stars">
            {`${review.rating} `}
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            Stars
          </div>
        </div>
        <div className="ratingData">
          <div id="user-date-stamp">
            {review.reviewer_name}
            {review.date}
          </div>
          <p id="summary">{review.summary}</p>
          <p id="body">{review.body}</p>
          <div id="recommendation">
            {review.recommend ? 'This person recommends this product' : ''}
          </div>
          <div id="responses">
            {review.response ? `${review.response}` : ''}
          </div>
          <div className="pics">
            {review.photos.map((image) => (<img id={image.id} alt="failed to load" src={image.url} />))}
          </div>
          <table className="buttons">
            <button className="button" type="submit" id="moreReviews">MORE REVIEWS</button>
            <button className="button" type="submit">ADD REVIEW</button>
          </table>
        </div>
      </div>
    ))
    );
  }
}

export default ReviewTile;
