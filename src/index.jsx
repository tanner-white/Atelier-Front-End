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
  return (
    <div>
      <header>
        <h1 className="business-name">Atelier</h1>
      </header>
      <Overview setCurrentProductName={setCurrentProductName} />
      <Questions />
      <RatingsApp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// export default index;
