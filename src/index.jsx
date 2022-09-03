/* eslint-disable import/extensions */
import React, { useState, createRef } from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overviewIndex.jsx';
// eslint-disable-next-line import/extensions
import RatingsApp from './ratingsAndReviews/RatingsApp.jsx';
// eslint-disable-next-line import/extensions
import Questions from './q&a/QuestionsApp.jsx';

function App() {
  const [currentProductName, setCurrentProductName] = useState('');
  const reviewsRef = createRef();
  const scrollToReviews = () => {
    reviewsRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <header>
        <h1 className="business-name">Atelier</h1>
      </header>
      <Overview setCurrentProductName={setCurrentProductName} scrollToReviews={scrollToReviews} />
      <Questions />
      <div ref={reviewsRef} />
      <RatingsApp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// export default index;
