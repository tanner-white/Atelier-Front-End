/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './components/QuestionList.jsx';

function Questions() {
  const [questions, setQuestions] = useState({});
  const [questionsAdded, setQuestionsAdded] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/qa/questions')
      .then((list) => {
        console.log('client side GET request: ', list);
        setQuestions(list.data);
      })
      .catch((err) => (console.error(err)));
  }, [questionsAdded]);

  const handleQuestionSubmit = (question) => {
    axios.post('http://localhost:3001/addquestion', question)
      .then(() => setQuestionsAdded(questionsAdded + 1))
      .catch((err) => console.error(err));
  };

  return (
    <QuestionList props={questions} handleQuestionSubmit={handleQuestionSubmit} />
  );
}

export default Questions;
