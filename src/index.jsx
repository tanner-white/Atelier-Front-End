/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overviewIndex.jsx';
// eslint-disable-next-line import/extensions
import RatingsApp from './ratingsAndReviews/RatingsApp.jsx';
// eslint-disable-next-line import/extensions
import Questions from './q&a/QuestionsApp.jsx';
import RelatedToIndex from './relatedToItems/relatedToIndex.jsx'
import Questions from './q&a/QuestionsApp.jsx';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Overview />
      <Questions />
      <RatingsApp />
      <RelatedToIndex />
      <Questions />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
