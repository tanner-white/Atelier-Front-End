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
      <div className="rar_tile" key={review.review_id}>
        <div className="rar_ratingData">
          <div id="rar_user-date-stamp">
            {review.reviewer_name}
            ,
            {review.date}
          </div>
          <p id="rar_summary">{review.summary}</p>
          <p id="rar_fullSummary">{review.body}</p>
          <div id="rar_recommendation">
            {review.recommend ? 'This person recommends this product' : ''}
          </div>
          <div id="rar_responses">
            {review.response ? `${review.response}` : ''}
          </div>
          <div className="rar_pics">
            {review.photos.map((image) => (<img id={image.id} alt="failed to load" src="https://placebear.com/50/50.jpg"/*{image.url}*/ />))}
          </div>
        </div>
      </div>
    ))
    );
  }
}

export default ReviewTile;
