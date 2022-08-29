/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionList from './components/QuestionList.jsx';

const product = {
  id: '5',
};

function Questions() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios.get('/qa/questions', { id: product.id })
      .then((data) => (console.log(data)));
  });

  return (
    <div>
      <QuestionList props={response} />
    </div>
  );
}

export default Questions;
