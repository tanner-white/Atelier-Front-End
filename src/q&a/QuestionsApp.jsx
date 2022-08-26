import React from 'react';
import QuestionList from './components/QuestionList.jsx';

function Questions(props) {
  return (
    <div>
      <QuestionList props={props} />
    </div>
  );
}

export default Questions;
