import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function Answers({ answer }) {
  const [helpful, setHelpful] = useState(answer.helpfulness);

  const handleHelpful = () => {
    axios.put('http://localhost:3001/answers/helpful', { id: answer.answer_id })
      .then(() => setHelpful(helpful + 1))
      .catch((err) => console.error('client side helpful error: ', err));
  };

  return (
    <div className="answer">
      <div className="answer-body">
        A:&nbsp;
        {answer.body}
        <button type="button" className="link-button" onClick={() => (handleHelpful())}>
          helpful?&nbsp;
          {`(${helpful})`}
        </button>
        <button type="button" className="link-button" onClick={() => (console.log('report user'))}>report</button>
      </div>
      <span className="answer-spans">
        {answer.answerer_name}
      </span>
      |
      <span className="answer-spans">
        {answer.date}
      </span>
    </div>
  );
}

Answers.propTypes = {
  answer: PropTypes.shape.isRequired,
};

export default Answers;
