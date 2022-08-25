import React from 'react';
import ReviewTile from './reviewTile.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [1, 2, 3]
    };
  }

  render() {
    return (
      <div><ReviewTile /></div>
    );
  }
}

export default ReviewList;
