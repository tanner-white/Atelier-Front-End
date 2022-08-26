/* eslint-disable import/extensions */
import React from 'react';
import ImageGallery from './components/ImageGallery.jsx';
import BasicInfo from './components/BasicInfo.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDetails from './components/ProductDetails.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: 1,
        name: 'Camo Onesie',
        slogan: 'Blend in to your crowd',
        description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        category: 'Jackets',
        default_price: '140',
      },
      styles: {
        style_id: 1,
        name: 'Forest Green & Black',
        original_price: '140',
        sale_price: '0',
        'default?': true,
        photos: [
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_1_photo_number.jpg',
          },
          {
            thumbnail_url: 'urlplaceholder/style_1_photo_number_thumbnail.jpg',
            url: 'urlplaceholder/style_1_photo_number.jpg',
          },
        ],
        skus: {
          37: {
            quantity: 8,
            size: 'XS',
          },
          38: {
            quantity: 16,
            size: 'S',
          },
          39: {
            quantity: 17,
            size: 'M',
          },
        // ...
        },
      },
    };
  }

  render() {
    const {item} = this.state;
    return (
      <div>
        <div className="overview-widget">
          <ImageGallery />
          <div className="basic-info-container">
            <BasicInfo item={item} />
            <StyleSelector />
            <AddToCart />
          </div>
        </div>
        <ProductDetails item={item} />
      </div>
    );
  }
}

export default Overview;
