import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedToCard from './RelatedToCard.jsx';

function RelatedToList({ currentProduct, setCurrentProduct }) {
  const [relatedToCards, setRelatedToCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState([]);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(3);
  useEffect(() => {
    setFirstIndex(0);
    setLastIndex(3);
  }, [currentProduct]);
  useEffect(() => {
    axios.get(`http://localhost:3001/relatedTo/${currentProduct}`)
      .then((response) => {
        setRelatedToCards(response.data);
        setDisplayedCards(response.data.slice(firstIndex, lastIndex));
      });
  }, [currentProduct]);

  useEffect(() => {
    setDisplayedCards(relatedToCards.slice(firstIndex, lastIndex));
  }, [firstIndex, lastIndex]);

  const goToNextSlide = () => {
    setFirstIndex(firstIndex + 1);
    setLastIndex(lastIndex + 1);
  };

  const goToPreviousSlide = () => {
    setFirstIndex(firstIndex - 1);
    setLastIndex(lastIndex - 1);
  };

  return (
    // Left Arrow
    <div>
      {firstIndex === 0 ? null : (
        <button className="related-to-left-arrow" type="button" onClick={goToPreviousSlide}>
          &lt;
        </button>
      )}
      <div id="related-to-list">
        {displayedCards.map((id) => (
          <RelatedToCard
            id={id}
            setCurrentProduct={setCurrentProduct}
          />
        ))}
      </div>
      {lastIndex === relatedToCards.length ? null : (
        <button className="related-to-right-arrow" type="button" onClick={goToNextSlide}>
          &gt;
        </button>
      )}
    </div>
  );
}

export default RelatedToList;
