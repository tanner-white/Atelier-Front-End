import React from 'react';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.product,
      all: [], // on event this list will populate by two
    };
  }

  formatDate(strDate) {
    let date = (new Date(strDate));
    console.log(date);
    date = date.toString().slice(3, 15);
    return date;
  }

  render() {
    return (this.state.list.results.map((review) => (
      <div key={review.review_id} className="rar_tile">
        <div id="rar_userDateHeader">
          <div id="rar_stars">
            { /*`${this.state.list.count} `*/ }
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <div>
            {review.reviewer_name}
            ,
            {this.formatDate(review.date)}
          </div>
        </div>
        <h3 id="rar_summary">{review.summary}</h3>
        <p id="rar_fullSummary">{review.body}</p>
        <div id="rar_recommendation">
          {review.recommend ? 'I recommend this product' : ''}
        </div>
        <div id="rar_responses">
          {review.response ? `${review.response}` : ''}
        </div>
        <div className="rar_pics">
          {review.photos.map((image) => (
            <img id={image.id} alt="failed to load" src="https://placebear.com/50/50.jpg"/*{image.url}*/ />
          ))}
        </div>
      </div>
    ))
    );
  }
}

export default ReviewTile;
