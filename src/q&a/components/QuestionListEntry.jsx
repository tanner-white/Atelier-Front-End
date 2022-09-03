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
  const [index, setIndex] = useState(2);
  const aModal = useRef(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/qa/questions/${item.question_id}/answers`)
      .then((response) => {
        if (response.data) {
          setList(response.data);
        }
      })
      .catch((err) => console.error(err));
  }, [item, helpful, answerAdded]);

  useEffect(() => {
    setAnswers(list.slice(0, index));
  }, [index, list]);

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

  const handleMoreAnswers = (e) => {
    e.preventDefault();
    setIndex(list.length);
  };

  const handleLessAnswers = (e) => {
    e.preventDefault();
    setIndex(2);
  };

  const moreAnswersButton = list.length > answers.length
    ? (
      <button className="answer-buttons" type="submit" onClick={(e) => handleMoreAnswers(e)}>
        More Answers
      </button>
    ) : null;

  const lessAnswersButton = answers.length > 2
    ? (
      <button className="answer-buttons" type="submit" onClick={(e) => handleLessAnswers(e)}>
        Collapse Answers
      </button>
    ) : null;

  return (
    <div className="question-entry">
      <div>
        <span id="question-body">
          <b>
            Q:&nbsp;
            {item.question_body}
          </b>
        </span>
        <button type="button" className="link-button" onClick={() => handleHelpful()}>
          helpful?&nbsp;
          {`(${helpful})`}
        </button>
        <button type="button" className="link-button" onClick={() => aModal.current.open()}>add answer</button>
        <AddAnswer ref={aModal} handleSubmit={handleAnswerSubmit} />
      </div>
      <br />
      <div>
        {answers.map((answer) => <Answers answer={answer} key={answer.answer_id} />)}
      </div>
      {moreAnswersButton}
      {lessAnswersButton}
    </div>
  );
}

QuestionListEntry.propTypes = {
  item: PropTypes.arrayOf.isRequired,
};

export default QuestionListEntry;
