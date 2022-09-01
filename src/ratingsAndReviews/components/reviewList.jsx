import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import ReviewTile from './reviewTile.jsx';
// eslint-disable-next-line import/extensions
import RatingTile from './ratingTile.jsx';
// eslint-disable-next-line import/extensions
import Filter from './filter.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      origin: null,
      product: this.props.productInfo,
    };
  }

  sortByRelevance() {
    const originals = this.state.product;
    const sorted = this.props.productInfo.results;

    sorted.sort(((a, b) => new Date(a.date) - new Date(b.date)));
    sorted.sort((a, b) => b.helpfulness.toString() - a.helpfulness.toString());

    const sortedAndMerged = originals;
    sortedAndMerged.results = sorted;

    this.setState({
      origin: originals,
      product: sortedAndMerged,
    });
  }

  sortByHelpful() {
    const originals = this.state.product;
    const sorted = this.props.productInfo.results;

    sorted.sort((a, b) => b.helpfulness - a.helpfulness);

    const sortedAndMerged = originals;
    sortedAndMerged.results = sorted;

    this.setState({
      origin: originals,
      product: sortedAndMerged,
    });
  }

  sortByNewest() {
    const originals = this.state.product;
    const sorted = this.props.productInfo.results;

    sorted.sort(((a, b) => new Date(a.date) - new Date(b.date)));

    const sortedAndMerged = originals;
    sortedAndMerged.results = sorted;

    this.setState({
      origin: originals,
      product: sortedAndMerged,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="rar_section">
        <div className="rar_ratingBox"><RatingTile product_data2={this.props.productInfo} /></div>
        <div className="rar_tileBox">
          <div>
            <Filter
              numReviews={5}
              sortRel={this.sortByRelevance.bind(this)}
              sortHelp={this.sortByHelpful.bind(this)}
              sortNew={this.sortByNewest.bind(this)}
            />
          </div>
          <ReviewTile product_data1={this.props.productInfo} />
          <div className="rar_reviewButtons">
            <button className="button" type="submit" id="moreReviews">MORE REVIEWS</button>
            <button className="button" type="submit">ADD A REVIEW +</button>
          </div>
        </div>
      </div>
    );
  }
}

// ReviewList.propTypes = {
//   productInfo: PropTypes.shape.isRequired,
// };
export default ReviewList;
