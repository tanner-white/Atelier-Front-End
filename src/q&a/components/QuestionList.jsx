import React from 'react';
// eslint-disable-next-line import/extensions
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
