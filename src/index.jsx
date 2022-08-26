import React from 'react';
import ReactDOM from 'react-dom';
import Questions from './q&a/QuestionsApp.jsx';

function App() {
  return (
    <div>
      <Questions />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
