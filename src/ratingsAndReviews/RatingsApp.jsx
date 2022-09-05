import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ReviewList from './components/reviewList.jsx';

class RatingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { results: [] },
      currentMeta: {},
    };
  }

  componentDidMount() {
    // gets all reviews for a specific product - still needs a way to send product id
    axios.get('http://localhost:3001/reviews/')
      .then((response) => this.setState({ currentItem: response.data }))
      .then(this.getMeta())
      .catch((err) => (console.log(err)));
  }

  getMeta(productId) {
    axios.get('http://localhost:3001/reviews/meta', productId)
      .then((response) => this.setState({ currentMeta: response.data }))
      .catch((err) => (console.log(err)));
  }

  addReview(message) {
    axios.post('http://localhost:3001/reviews/addReview', message)
      .then((response) => console.log('Post request to reviews API successful', response))
      .catch((error) => console.log('error posting to API', error));
  }

  render() {
    const { currentItem, currentMeta } = this.state;
    const { setNumberReviews, setAverageStars, currentProductName } = this.props;
    setNumberReviews(currentItem.results.length);
    return (
      <div id="rarMain">
        <ReviewList
          productInfo={currentItem}
          itemMeta={currentMeta}
          currentProductName={currentProductName}
          addReview={this.addReview.bind(this)}
          setAverageStars={setAverageStars}
        />
      </div>
    );
  }
}

export default RatingsApp;
