import React from 'react';
import StarRatings from 'react-star-ratings';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.product_data1,

    };

    const darkMode = { display: 'flex' };
  }

  handleHelpfulClick(event) {
    const body = { review_id: parseInt(event.target.id) };
    this.props.addHelpful(body);
  }

  handleReportClick(event) {
    const body = { review_id: parseInt(event.target.id) };
    this.props.addReport(body);
  }

  formatDate(strDate) {
    let date = (new Date(strDate));
    date = date.toString().slice(3, 15);
    return date;
  }

  render() {
<<<<<<< HEAD
    console.log(this.props.product_data1);
    return (this.props.product_data1.results.map((review) => (
      <div key={review.review_id} className="rar_tile">
=======
    return (this.props.product_data1.results.slice(0, this.props.index).map((review) => (
      <div key={review.review_id} className="rar_tile" style={this.darkMode}>
>>>>>>> ff48fecffddefc3977c72a57a38718441c00b556
        <div id="rar_userDateHeader">
          <div id="rar_tileStars">
            <span>
              <StarRatings
                rating={review.rating}
                starRatedColor="#525151"
                numberOfStars={5}
                starDimension="1.5vw"
                starSpacing="1px"
              />
            </span>
          </div>
          <div id="rar_name-date">
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
          {review.response ? `${'Response from seller:'}${review.response}` : ''}
        </div>
        <div className="rar_pics">
          {review.photos.map((image) => (
            <img className="rar_thumbs" id={image.id} alt="https://placeimg.com/640/480/any" onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="https://placeimg.com/640/480/any"}} src={image.url} />
          ))}
        </div>
        <div id="rar_helpAndReport">
          <div id="rar_helpful">Helpful?</div>
          <button type="button" className="rar_yes" id={review.review_id} onClick={this.handleHelpfulClick.bind(this)}>
            Yes(
            {review.helpfulness}
            )
          </button>
          <div id="rar_symbol">|</div>
          <button type="button" className="rar_report" id={review.review_id} onClick={this.handleReportClick.bind(this)}> Report</button>
        </div>
      </div>
    ))
    );
  }
}

export default ReviewTile;
