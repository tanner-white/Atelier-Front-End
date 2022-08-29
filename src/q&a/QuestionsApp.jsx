/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './components/QuestionList.jsx';

function Questions() {
  const [questions, setQuestions] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3001/qa/questions')
      .then((data) => (console.log(data)))
      .catch((err) => (console.error(err)));
  });

  return (
    <div>
      <QuestionList props={questions} />
    </div>
  );
}

export default Questions;
