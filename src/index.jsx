import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import RatingsApp from './ratingsAndReviews/RatingsApp.jsx';
// eslint-disable-next-line import/extensions
import Questions from './q&a/QuestionsApp.jsx';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <RatingsApp />
      <Questions />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
