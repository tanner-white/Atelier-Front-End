/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Answers from './Answers.jsx';

function QuestionListEntry({ item }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/qa/questions/${item.question_id}/answers`)
      .then((response) => setAnswers(response.data))
      .catch((err) => console.error(err));
  }, [item]);

  return (
    <div className="question-entry">
      <div>
        Q:
        {item.question_body}
        <button type="button" className="link-button" onClick={() => (console.log('helpful incrementer'))}>
          Helpful?&nbsp;
          {item.question_helpfulness}
        </button>
        <button type="button" className="link-button" onClick={() => (console.log('add and answer'))}>add answer</button>
      </div>
      <div>
        {answers.map((answer) => <Answers answer={answer} />)}
      </div>
    </div>
  );
}

QuestionListEntry.propTypes = {
  item: PropTypes.arrayOf.isRequired,
};

export default QuestionListEntry;
