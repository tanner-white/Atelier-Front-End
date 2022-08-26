import React from 'react';
// eslint-disable-next-line import/extensions
import ReviewTile from './reviewTile.jsx';
// this will eventually map over all of the tiles in state and send them to reviewTile
class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [1, 2, 3],
    };
  }

  render() {
    return (
      <div><ReviewTile tiles={this.state.tiles}/></div>
    );
  }
}

export default ReviewList;
