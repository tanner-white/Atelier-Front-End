import React from 'react';
import ImageGallery from './components/ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ImageGallery />
      </div>
    );
  }
}

export default Overview;
