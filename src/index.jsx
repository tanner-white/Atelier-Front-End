/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overviewIndex.jsx';
// eslint-disable-next-line import/extensions
import RatingsApp from './ratingsAndReviews/RatingsApp.jsx';
// eslint-disable-next-line import/extensions
import Questions from './q&a/QuestionsApp.jsx';

function App() {
  const [currentProductName, setCurrentProductName] = useState('');
  const [averageStars, setAverageStars] = useState(0);
  const [numberReviews, setNumberReviews] = useState(0);
  return (
    <div>
      <header>
        <h1 className="business-name">Atelier</h1>
      </header>
      <Overview setCurrentProductName={setCurrentProductName} />
      <Questions />
      <RatingsApp
        currentProductName={currentProductName}
        setAverageStars={setAverageStars}
        setNumberReviews={setNumberReviews}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// export default index;
