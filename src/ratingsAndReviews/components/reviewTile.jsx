import React from 'react';
import StarRatings from 'react-star-ratings';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.product_data1,
      all: [], // on event this list will populate by two
    };
  }

  formatDate(strDate) {
    let date = (new Date(strDate));
    date = date.toString().slice(3, 15);
    return date;
  }

  render() {
    return (this.props.product_data1.results.slice(0, this.props.index).map((review) => (
      <div key={review.review_id} className="rar_tile">
        <div id="rar_userDateHeader">
          <div id="rar_tileStars">
            <span>
              <StarRatings
                rating={review.rating}
                starRatedColor="black"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="1px"
              />
            </span>
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
          {review.recommend ? <i id="rar_checkmark">&#10003; I recommend this product</i> : ''}
        </div>
        <div id="rar_responses">
          {review.response ? `${'Response:'}${review.response}` : ''}
        </div>
        <div className="rar_pics">
          {review.photos.map((image) => (
            <img className="rar_thumbs" id={image.id} alt="not found" src={image.url} />
          ))}
        </div>
        <div id="rar_helpAndReport">
          <div id="rar_helpful">Helpful?</div>
          <div id="rar_yes">Yes</div>
          <a href="">
            (
            {1}
            )
            </a>
          <div id="rar_symbol">|</div>
          <div id="rar_report"> report</div>
        </div>
      </div>
    ))
    );
  }
}

export default ReviewTile;
