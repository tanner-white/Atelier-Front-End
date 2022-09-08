import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedToList from './RelatedToList.jsx';

function RelatedToApp({ currentProduct, setCurrentProduct }) {
  return (
    <div id="related-to-widget">
      <p className="related-products">RELATED PRODUCTS</p>
      <RelatedToList currentProduct={currentProduct} setCurrentProduct={setCurrentProduct} />
    </div>
  );
}

export default RelatedToApp;
