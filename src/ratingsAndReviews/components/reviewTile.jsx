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
    return (this.state.list.results.map((review) => (
      <div className="tile" id={review.review_id}>
        <div id="stars">
          {`${review.rating} `}
          Stars
        </div>
        <div id="user-date-stamp">
          {review.reviewer_name}
          {review.date}
        </div>
        <h4 id="summary">{review.summary}</h4>
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
        <button type="submit" id="moreReviews">MORE REVIEWS</button>
        <button type="submit">ADD REVIEW</button>
      </div>
    ))
    );
  }
}

export default ReviewTile;
