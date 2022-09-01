/* eslint-disable import/extensions */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Answers from './Answers.jsx';
import AddAnswer from './AddAnswerModal.jsx';

function QuestionListEntry({ item }) {
  const [list, setList] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [helpful, setHelpful] = useState(item.question_helpfulness);
  const [answerAdded, setAnswerAdded] = useState(0);
  const aModal = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/qa/questions/${item.question_id}/answers`)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setList(response.data);
          setAnswers(response.data.slice(0, 2));
        }
      })
      .catch((err) => console.error(err));
  }, [item, helpful, answerAdded]);

  const handleHelpful = () => {
    axios.put('http://localhost:3001/qa/questions/:question_id/helpful', { id: item.question_id })
      .then(() => setHelpful(helpful + 1))
      .catch((err) => console.error('client side helpful error: ', err));
  };

  const handleAnswerSubmit = (answer) => {
    axios.post(`http://localhost:3001/addanswer/${item.question_id}`, answer)
      .then(() => setAnswerAdded(answerAdded + 1))
      .catch((err) => console.error(err));
  };

  return (
    <div className="question-entry">
      <div>
        Q:&nbsp;
        {item.question_body}
        <button type="button" className="link-button" onClick={() => handleHelpful()}>
          helpful?&nbsp;
          {`(${helpful})`}
        </button>
        <button type="button" className="link-button" onClick={() => aModal.current.open()}>add answer</button>
        <AddAnswer ref={aModal} handleSubmit={handleAnswerSubmit} />
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
