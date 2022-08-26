import index from '../index.jsx';
import React from 'react';
import { useState, useEffect } from 'react';
import RelatedToCard from './RelatedToCard.jsx'


function RelatedToList() {
  const [relatedToCards, setrelatedToCards] = useState([1, 2, 3, 4, 5, 6, 7])/* this will eventually becomes the product info of all the same category of the default product */
  const [startIndex, setstartIndex] = useState(0);
  const [endIndex, setendIndex] = useState(2);


  const useEffect((goToNextSlide) => {
    if (endIndex >= relatedToCards.length - 1) {
      /*hide the right arrow button */
    } else {
      setstartIndex(startIndex + 1)
      setendIndex(endIndex + 1)
    }
  })



  const useEffect((goToPrevSlide) => {
    if (startIndex <= 0) {
      /*hide the right arrow button */
    } else {
      setstartIndex(startIndex - 1)
      setendIndex(endIndex - 1)
    }
  })
   /*the length of related items arr - 1 */

  return (
    // Left Arrow
    <div>
      <button id='leftArrow' type='button' onClick={goToPrevSlide}>
        {/* <i 'fa fa-angle-left fa-3x' aria-hidden='true'></i> */}
      </button>
        <span>
      <div>
        <ol>
          <li id='relatedToList'>{relatedToCards[startIndex]}</li>
          <li id='relatedToList'>{relatedToCards[startIndex + 1]}</li>
          <li id='relatedToList'>{relatedToCards[startIndex + 2]}</li>
          {/* <li id='relatedToList'>{relatedToCards[n + 3]}</li> */}
        </ol>
        {/* < relatedToCards.map(card => {
          RelatedToCard card={card}
          }) /> */}
      </div>
        </span>
      <button id='rightArrow' type='button' onClick={goToNextSlide}>
        {/* <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i> */}
      </button>

    </div>
  );
}


// <div class="relatedToList">

// </div>

export default RelatedToList;