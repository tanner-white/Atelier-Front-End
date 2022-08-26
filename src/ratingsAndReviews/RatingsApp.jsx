import React from 'react';
// eslint-disable-next-line import/extensions
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
