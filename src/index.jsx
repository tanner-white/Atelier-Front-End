import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overviewIndex.jsx';
import Questions from './q&a/QuestionsApp.jsx';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Overview />
      <Questions />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
