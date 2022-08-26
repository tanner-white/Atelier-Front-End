import React from 'react';

function Answers({ answer }) {
  return (
    <div className="answer">
      <div className="answer-body">
        {answer.body}
        <button type="button" className="link-button" onClick={() => (console.log('helpful incrementer'))}>Helpful?</button>
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

export default Answers;
