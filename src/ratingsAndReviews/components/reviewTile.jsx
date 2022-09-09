import React from 'react';
import StarRatings from 'react-star-ratings';

class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.product_data1,

    };
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
    const { isDarkMode } = this.props;
    return (this.props.product_data1.results.slice(0, this.props.index).map((review) => (
      <div key={review.review_id} className="rar_tile" style={this.darkMode}>
        <div id="rar_userDateHeader">
          <div id="rar_tileStars">
            <span>
              <StarRatings
                rating={review.rating}
                starRatedColor={isDarkMode ? '#ffd700' : '#525151'}//'#ECF1C6'
                numberOfStars={5}
                starDimension="1.5vw"
                starSpacing="1px"
              />
            </span>
          </div>
          <div id="rar_name-date" style={{ color: isDarkMode ? '#BDDEDB' : 'black'}}>
            {review.reviewer_name}
            ,
            {this.formatDate(review.date)}
          </div>
        </div>
        <h3 id="rar_summary" style={{ color: isDarkMode ? '#BDDEDB' : 'black'}}>{review.summary}</h3>
        <p id="rar_fullSummary">{review.body}</p>
        <div id="rar_recommendation">
          {review.recommend ? <i id="rar_checkmark">&#10003; I recommend this product</i> : ''}
        </div>
        <div id="rar_responses">
          {review.response ? `${'Response from seller:'}${review.response}` : ''}
        </div>
        <div className="rar_pics">
          {review.photos.map((image) => (
            <img className="rar_thumbs" style={{ border: isDarkMode ? 'solid 1px #BDDEDB' : 'solid 1px black'}} id={image.id} alt="https://placeimg.com/640/480/any" onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src="https://placeimg.com/640/480/any"}} src={image.url} />
          ))}
        </div>
        <div id="rar_helpAndReport">
          <div id="rar_helpful" style={{ color: isDarkMode ? '#BDDEDB' : 'black' }}>Helpful?</div>
          <button type="button" className="rar_yes" style={{ color: isDarkMode ? '#BDDEDB' : 'black'}} id={review.review_id} onClick={this.handleHelpfulClick.bind(this)}>
            Yes(
            {review.helpfulness}
            )
          </button>
          <div id="rar_symbol">|</div>
          <button type="button" className="rar_report" style={{ color: isDarkMode ? '#BDDEDB' : 'black'}} id={review.review_id} onClick={this.handleReportClick.bind(this)}> Report</button>
        </div>
      </div>
    ))
    );
  }
}

export default ReviewTile;
