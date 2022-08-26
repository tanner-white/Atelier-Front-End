/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
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

QuestionListEntry.propTypes = {
  item: PropTypes.arrayOf.isRequired,
};

export default QuestionListEntry;
