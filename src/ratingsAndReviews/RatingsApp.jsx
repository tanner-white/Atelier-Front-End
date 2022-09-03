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

  render() {
    return (
      <div><ReviewList productInfo={this.state.currentItem} /></div>
    );
  }
}

export default RatingsApp;
