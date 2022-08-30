/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm.jsx';
import QuestionListEntry from './QuestionListEntry.jsx';

function QuestionList({ props }) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    setMatches(props.results);
  }, [props.results]);

  const handleSubmit = (input) => {
    if (input.length >= 3) {
      const display = [];
      matches.forEach((match) => {
        const question = match.question_body.toLowerCase();
        if (question.includes(input.toLowerCase())) {
          display.push(match);
        }
      });
      setMatches(display);
    } else {
      setMatches(props.results);
    }
  };
  if (matches) {
    return (
      <div>
        <SearchForm handleSubmit={handleSubmit} />
        {matches.map((match) => <QuestionListEntry item={match} />) }
      </div>
    );
  }
  return (
    <div>No Questions Being Asked</div>
  );
}

QuestionList.propTypes = {
  props: PropTypes.shape.isRequired,
  results: PropTypes.arrayOf.isRequired,
};

export default QuestionList;
