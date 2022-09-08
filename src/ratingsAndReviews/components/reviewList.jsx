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
  constructor({ props, addReview, productInfo, results, isDarkMode}) {
    super(props);
    this.state = {
      origin: productInfo,
      product: productInfo,
      index: 2,
      usedVal: [],
      flags: false,
    };

    const darkMode = {};
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
<<<<<<< HEAD
=======
    console.log( this.state.origin);
>>>>>>> ff48fecffddefc3977c72a57a38718441c00b556
  }

  sortByHelpful() {
    console.log('triggered');
    const originals = this.props.productInfo;
    const sorted = this.props.productInfo.results.slice();
    sorted.sort((a, b) => b.helpfulness - a.helpfulness);
    const sortedAndMerged = originals;
    sortedAndMerged.results = sorted;

    this.setState({
      product: sortedAndMerged,
      origin: originals,
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

  sortByClick(val) {
    if (this.state.usedVal.includes(val)) {
      this.setState({
        usedVal: [],
        flags: false,
      });
      this.props.refreshList();
    } else {
      let reviewObj = this.props.productInfo;
      let reviewArray = this.props.productInfo.results.slice();

      const filtered = reviewArray.filter((rev) => {
        if (rev.rating <= val) {
          return rev;
        }
      });

      reviewObj.results = filtered;
      let tracked = this.state.usedVal;
      tracked.push(val);
      this.setState({
        product: reviewObj,
        usedVal: tracked,
        flags: true,
      });
    }
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
            sortByClickFunc={this.sortByClick.bind(this)}

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
            addHelpful={this.props.postHelpful}
            addReport={this.props.postReport}
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
