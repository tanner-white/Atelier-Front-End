import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import AddReview from './addReview.jsx';
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
      index: 2,
    };
  }

  sortByRelevance() {
    console.log('triggered');
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

    this.sortByHelpful.bind(this);
    this.sortByNewest.bind(this);
    this.sortByOldest.bind(this);
    this.sortByRelevance.bind(this);
  }

  sortByHelpful() {
    console.log('triggered');
    const originals = this.state.product;
    const sorted = this.props.productInfo.results;
    console.log(sorted);
    sorted.sort((a, b) => b.helpfulness - a.helpfulness);
    console.log(sorted);
    const sortedAndMerged = originals;
    sortedAndMerged.results = sorted;

    this.setState({
      origin: originals,
      product: sortedAndMerged,
    });
  }

  sortByNewest() {
    console.log('triggered');
    const originals = this.state.product;
    const sorted = this.props.productInfo.results;

    sorted.sort(((a, b) => new Date(b.date) - new Date(a.date)));

    const sortedAndMerged = originals;
    sortedAndMerged.results = sorted;

    this.setState({
      origin: originals,
      product: sortedAndMerged,
    });
  }

  sortByOldest() {
    console.log('triggered');
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

  updateIndex() {
    this.setState({
      index: this.state.index + 2,
    });
  }

  resetIndex() {
    this.setState({
      index: 2,
    });
  }

  render() {
    return (
      <div className="rar_section">
        <div className="rar_ratingBox"><RatingTile product_data2={this.props.productInfo} /></div>
        <div className="rar_tileBox">
          <div>
            <Filter
              numReviews={this.props.productInfo.results.length}
              sortRel={this.sortByRelevance}
              sortHelp={this.sortByHelpful}
              sortNew={this.sortByNewest}
              sortOld={this.sortByOldest}
            />
          </div>
          <ReviewTile product_data1={this.props.productInfo} index={this.state.index} />
          <div className="rar_reviewButtons">

            <button className="button" type="submit" id="moreReviews" onClick={this.updateIndex.bind(this)}>MORE REVIEWS</button>
            <button className="button" type="submit" id="lessReviews" onClick={this.resetIndex.bind(this)}>LESS REVIEWS</button>
            <div><AddReview /></div>
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
