/* eslint-disable import/extensions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm.jsx';
import QuestionListEntry from './QuestionListEntry.jsx';

function QuestionList({ props }) {
  const [questions, setQuestions] = useState(props.results);
  const [matches, setMatches] = useState(props.results);

  const handleSubmit = (input) => {
    console.log('this is what the user typed in search bar: ', input);
    const display = [];
    matches.forEach((match) => {
      const question = match.question_body.toLowerCase();
      if (question.includes(input)) {
        display.push(match);
      }
    });
    setMatches(display);
  };

  return (
    <div>
      <SearchForm handleSubmit={handleSubmit} />
      {matches.map((match) => <QuestionListEntry item={match} />) }
    </div>
  );
}

QuestionList.propTypes = {
  props: PropTypes.shape.isRequired,
  results: PropTypes.arrayOf.isRequired,
};

export default QuestionList;
