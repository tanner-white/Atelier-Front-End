/* eslint-disable import/extensions */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm.jsx';
import QuestionListEntry from './QuestionListEntry.jsx';
import AddQuestion from './AddQuestionModal.jsx';

function QuestionList({ props, handleQuestionSubmit }) {
  const [list, setList] = useState([]);
  const [matches, setMatches] = useState([]);
  const qModal = useRef(null);

  useEffect(() => {
    setList(props.results);
    setMatches(list);
  }, [props.results, list]);

  const handleSubmit = (input) => {
    if (input.length >= 3) {
      const display = [];
      list.forEach((item) => {
        const question = item.question_body.toLowerCase();
        if (question.includes(input.toLowerCase())) {
          display.push(item);
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
        <button type="button" onClick={() => qModal.current.open()}>Add a Question</button>
        <AddQuestion ref={qModal} submit={handleQuestionSubmit} props={props} />
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
