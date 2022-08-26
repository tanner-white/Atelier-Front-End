import React from 'react';
import QuestionListEntry from './QuestionListEntry.jsx';

function QuestionList(props) {
  return (
    <div>
      This is the QuestionList component
      <QuestionListEntry props={props} />
    </div>
  );
}

export default QuestionList;
