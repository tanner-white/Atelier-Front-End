import index from '../index.jsx';
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RelatedToList from '/src/relatedToItems/RelatedToList.jsx';

function RelatedToApp() {
  // const [relatedToList, setrelatedToList] = useState(['stuff', 'stuff', 'stuff', 'stuff', 'stuff', 'stuff', 'stuff']);
  // const [yourOutfitList, setyourOutfitList] = useState([]);

  return (
    <div>
      <h1>Related Products</h1>
      <RelatedToList />
    </div>
  );
}

export default RelatedToApp;
