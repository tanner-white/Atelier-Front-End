import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/overviewIndex.jsx';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Overview />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
