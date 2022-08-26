import React from 'react';
import ImageGallery from './components/ImageGallery.jsx';
import BasicInfo from './components/BasicInfo.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDetails from './components/ProductDetails.jsx'

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
        <BasicInfo />
        <StyleSelector />
        <AddToCart />
        <ProductDetails />
      </div>
    );
  }
}

export default Overview;
