/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';

function Answers({ answer, isDarkMode }) {
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

  const darkMode = {
    color: isDarkMode ? '#BDDEDB' : 'grey',
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
        <span className="answer-spans" id="answer-date" style={darkMode}>
          {answer.answerer_name}
          , &nbsp;
          {formatDate(answer.date)}
        </span>
        <span className="answer-spans" style={darkMode}>
          Helpful?&nbsp;
          <button type="button" className="link-button" id="answer-helpful" style={darkMode} onClick={() => (handleHelpful())}>
            Yes
            {`(${helpful})`}
          </button>
        </span>
        <span className="answer-spans" id="answer-report-span">
          <button type="button" className="link-button" id="answer-report-button" style={darkMode} onClick={() => (console.log('report user'))}>Report</button>
        </span>
      </div>
    </div>
  );
}

export default Answers;
