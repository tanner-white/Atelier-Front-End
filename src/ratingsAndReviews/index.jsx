import React from 'react';
import ReviewList from './components/reviewList.jsx';

class RatingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div><ReviewList /></div>
    );
  }
}

export default RatingsApp;
