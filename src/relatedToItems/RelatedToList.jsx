import index from '../index.jsx';
import React from 'react';
import { useState, useEffect } from 'react'


function RelatedToList() {

  return (
    <div id="relatedToList">
      <button id="leftArrowButton">left arrow</button>
      <ul>
        <li>First Card </li>
        <li>Second Card</li>
      </ul>
      <button id="rightArrowButton">right arrow</button>
    </div>
  );
}


// <div class="relatedToList">

// </div>

export default RelatedToList;