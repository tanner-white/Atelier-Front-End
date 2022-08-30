import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewList from './components/reviewList.jsx';
import SampleData from './components/data';

class RatingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: SampleData,
    };
  }

  // getReviews() {c
  //   axios.get('/reviews/')
  // }

  render() {
    return (
      <div><ReviewList reviews={this.state.currentItem} /></div>
    );
  }
}

export default RatingsApp;
