/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGallery from './components/ImageGallery.jsx';
import BasicInfo from './components/BasicInfo.jsx';
import StyleSelector from './components/StyleSelector.jsx';
import AddToCart from './components/AddToCart.jsx';
import ProductDetails from './components/ProductDetails.jsx';

function Overview() {
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/styles/66642')
      .then((response) => {
        console.log(response.data);
      });
  });
  return (
    <div>
      <div className="overview-widget">
        <ImageGallery />
        <div className="basic-info-container">
          <BasicInfo />
          <StyleSelector />
          <AddToCart />
        </div>
      </div>
      <ProductDetails />
    </div>
  );
}

export default Overview;
