import React from 'react';
import Answers from './Answers.jsx';

function QuestionListEntry({ item }) {
  return (
    <div className="question-entry">
      <div>
        Q:
        {item.question_body}
        <button type="button" className="link-button" onClick={() => (console.log('helpful incrementer'))}>Helpful?</button>
        <button type="button" className="link-button" onClick={() => (console.log('add and answer'))}>add answer</button>
      </div>
      <div>
        {Object.keys(item.answers).map((answer) => <Answers answer={item.answers[answer]} />)}
      </div>
    </div>
  );
}

export default QuestionListEntry;
