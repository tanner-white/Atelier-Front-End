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
  useEffect(() => {
    axios.get('http://localhost:3001/products/66642')
      .then(async (response) => {
        await setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [styles, setStyles] = useState({});
  useEffect(() => {
    axios.get('http://localhost:3001/styles/66642')
      .then(async (response) => {
        await setStyles(response.data);
      });
  }, []);
  return (

    <div>
      <div className="overview-widget">
        <ImageGallery />
        <div className="basic-info-container">
          <BasicInfo product={product} />
          <StyleSelector styles={styles} />
          <AddToCart />
        </div>
      </div>
      <ProductDetails product={product} />
    </div>
  );
}

export default Overview;
