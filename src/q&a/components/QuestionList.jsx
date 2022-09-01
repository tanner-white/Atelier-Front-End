/* eslint-disable import/extensions */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm.jsx';
import QuestionListEntry from './QuestionListEntry.jsx';
import AddQuestion from './AddQuestionModal.jsx';

function QuestionList({ props, handleQuestionSubmit }) {
  const [list, setList] = useState([]);
  const [matches, setMatches] = useState([]);
  const [index, setIndex] = useState(4);
  const qModal = useRef(null);

  useEffect(() => {
    if (props.results) {
      setList(props.results);
    }
  }, [list, props.results]);

  useEffect(() => {
    setMatches(list.slice(0, index));
  }, [index, list]);

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
      setMatches(props.results.slice(0, 4));
    }
  };

  const showMoreQuestions = () => {
    setIndex(index + 2);
  };

  const showLessQuestions = () => {
    setIndex(4);
  };

  const moreQuestionsButton = list.slice(index).length > 0
    ? (
      <button type="submit" onClick={showMoreQuestions}>More Questions</button>
    ) : null;

  const lessQuestionsButton = matches.length > 4
    ? (
      <button type="submit" onClick={showLessQuestions}>Less Questions</button>
    ) : null;

  if (matches) {
    return (
      <div>
        <SearchForm handleSubmit={handleSubmit} />
        {matches.map((match) => <QuestionListEntry item={match} />) }
        {moreQuestionsButton}
        {lessQuestionsButton}
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
