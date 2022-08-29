import index from '../index.jsx';
import React from 'react';
import { useState, useEffect } from 'react';
import RelatedToCard from './RelatedToCard.jsx'
import axios from 'axios';


function RelatedToList() {
  const [relatedToCards, setRelatedToCards] = useState([0, 1, 2, 3, 4, 5, 6, 7])/* this will eventually becomes the product info of all the same category of the default product */
  const [displayedCards, setDisplayedCards] = useState([0, 1, 2]);

  // useEffect(() => {
  //   axios.get('')
  // }, []);

  const goToNextSlide = () => {
    const newDisplayedCards = displayedCards.map(card => {
      return card + 1
    });
    setDisplayedCards(newDisplayedCards);
  }



  const goToPreviousSlide = () => {
    const newDisplayedCards = displayedCards.map(card => {
      return card - 1
    });
    setDisplayedCards(newDisplayedCards);
  }

  return (
    // Left Arrow
    <div>
      {displayedCards[0] === 0 ? null : <button id='leftArrow' type='button' onClick={goToPreviousSlide} >
      &lt;
      </button>}
      <span>
        {displayedCards.map(card => {
          return <RelatedToCard card={card} />
          })}
      </span>
      {displayedCards[2] === relatedToCards.length - 1 ? null : <button id='rightArrow' type='button' onClick={goToNextSlide}>
      &gt;
      </button>}
    </div>
  );
}


// <div class="relatedToList">

// </div>

export default RelatedToList;