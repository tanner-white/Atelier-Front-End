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
  constructor({ props, addReview, productInfo }) {
    super(props);
    this.state = {
      origin: null,
      product: productInfo,
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

    // this.sortByHelpful.bind(this);
    // this.sortByNewest.bind(this);
    // this.sortByOldest.bind(this);
    // this.sortByRelevance.bind(this);
  }

  sortByHelpful() {
    console.log('triggered');
    const originals = this.props.productInfo;
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
    let currentIndex = this.state.index;
    this.setState({
      index: currentIndex + 2,
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
        <div className="rar_ratingBox">
          <RatingTile
            product_data2={this.props.productInfo}
            setAverageStars={this.props.setAverageStars}
            itemMeta={this.props.itemMeta}
          />
        </div>
        <div id="rar_tileBox" className="rar_tileBox">
          <div>
            <Filter
              numReviews={this.props.productInfo.results.length}
              sortRel={this.sortByRelevance.bind(this)}
              sortHelp={this.sortByHelpful.bind(this)}
              sortNew={this.sortByNewest.bind(this)}
              sortOld={this.sortByOldest.bind(this)}
            />
          </div>
          <ReviewTile
            product_data1={this.props.productInfo}
            index={this.state.index}
          />
          <div className="rar_reviewButtons">
            <button type="submit" id="rar_tileBoxButtons" onClick={this.updateIndex.bind(this)}>MORE REVIEWS</button>
            {this.state.index === 2 ? '' : <button type="submit" id="rar_tileBoxButtons" onClick={this.resetIndex.bind(this)}>LESS REVIEWS</button>}
            <div>
              <AddReview
                addReview={this.props.addReview}
                currentProductName={this.props.currentProductName}
                productId={this.props.productInfo.product}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewList;
