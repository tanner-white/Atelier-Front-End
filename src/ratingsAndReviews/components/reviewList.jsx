import React from 'react';
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
      firstRender: null,
      tiles: props.reviews,
    };
  }

  componentDidMount() {

  }

  /*
  Relevant - Relevance will be determined by a combination of both the date that the review
  was submitted as well as ‘helpfulness’ feedback received. This combination should weigh the
  two characteristics such that recent reviews appear near the top, but do not outweigh reviews
  that have been found helpful. Similarly, reviews that have been helpful should appear near the
  top,but should yield to more recent reviews if they are older.
  */
  sortByRelevance() {
    // map over the reviews and sort by a combination of helpful and date
    // recent and helpful is first but helpful takes priority
    // helpful > recent
  }

  /*
  Helpful - This sort order will prioritize reviews that have been found helpful.
  The order can be found by subtracting “No” responses from “Yes” responses and sorting such that
  the highest score appears at the top.
  */
  sortByHelpful() {
    // map over the reviews and sort by the number of 'yes' minus 'no'
    // this reflects users opinion of a review
  }

  /*
  Newest - This is a straightforward sort based on the date the review was submitted.
  The most recent reviews should appear first.
  */
  sortByNewest() {
    // this is actually a big can of worms. I can simply call sort() but if I were worried about
    // time complexity I would have to give the method I use serious thought...
    const originals = this.state.tiles.results;
    const sorted = this.state.tiles.results;

    sorted.sort(((a, b) => new Date(a.date) - new Date(b.date)));
    console.log(sorted);

    this.setState({
      firstRender: originals,
      tiles: sorted,
    });
  }



  render() {
    return (
      <div className="rar_section">
        <div className="rar_ratingBox"><RatingTile /></div>
        <div className="rar_tileBox">
          <div>
            <Filter
              sortRel={this.sortByRelevance.bind(this)}
              sortHelp={this.sortByHelpful.bind(this)}
              sortNew={this.sortByNewest.bind(this)}
            />
          </div>
          <ReviewTile tiles={this.state.tiles} />
          <div className="rar_reviewButtons">
            <button className="button" type="submit" id="moreReviews">MORE REVIEWS</button>
            <button className="button" type="submit">ADD A REVIEW +</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewList;
