import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/extensions
import RatingsApp from './ratingsAndReviews/index.jsx';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <RatingsApp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
