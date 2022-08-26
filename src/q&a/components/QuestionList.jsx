import React from 'react';
// eslint-disable-next-line import/extensions
import QuestionListEntry from './QuestionListEntry.jsx';

function QuestionList({ props }) {
  return (
    <div>
      {props.results.map((item) => <QuestionListEntry item={item} />) }
    </div>
  );
}

export default QuestionList;
