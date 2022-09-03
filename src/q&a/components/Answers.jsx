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

  const formatDate = (strDate) => {
    let date = (new Date(strDate));
    date = date.toString().slice(3, 15);
    return date;
  };

  return (
    <div className="answer">
      <div className="answer-body">
        <span id="answer-header">A:&nbsp;</span>
        {answer.body}
      </div>
      <div className="answer-pic-container">
        {answer.photos.map((photo) => (
          <img className="answer-pics" src={photo.url} alt="Failed to Load Img" />
        ))}
      </div>
      <div className="answerer-info">
        <span className="answer-spans">
          {answer.answerer_name}
        </span>
        <span className="answer-spans">
          {formatDate(answer.date)}
        </span>
        <span className="answer-spans">
          Helpful?&nbsp;
          <button type="button" className="link-button" id="answer-helpful" onClick={() => (handleHelpful())}>
            Yes
            {`(${helpful})`}
          </button>
        </span>
        <span className="answer-spans" id="answer-report-span">
          <button type="button" className="link-button" id="answer-report-button" onClick={() => (console.log('report user'))}>report</button>
        </span>
      </div>
    </div>
  );
}

Answers.propTypes = {
  answer: PropTypes.shape({
    answer_id: PropTypes.number,
    body: PropTypes.string,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
    })),
  }).isRequired,
};

export default Answers;
