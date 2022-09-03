import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ReviewList from './components/reviewList.jsx';

class RatingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { results: [] },
    };
  }

  componentDidMount() {
    // gets all reviews for a specific product - still needs a way to send product id
    axios.get('http://localhost:3001/reviews/')
      .then((response) => this.setState({ currentItem: response.data }))
      .catch((err) => (console.log('error in app get', err)));
  }

  addReview(message) {
    axios.post('http://localhost:3001/reviews/addReview', message)
      .then((response) => console.log('Post request to reviews API successful', response))
      .catch((error) => console.log('error posting to API', error));
  }

  render() {
    const { currentItem } = this.state;
    return (
      <div><ReviewList productInfo={currentItem} addReview={this.addReview.bind(this)} /></div>
    );
  }
}

export default RatingsApp;
