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
  }, [props.results]);

  useEffect(() => {
    setMatches(list.slice(0, index));
  }, [index, list]);

  const handleSubmit = (input) => {
    if (input.length >= 3) {
      const display = [];
      list.forEach((match) => {
        const question = match.question_body.toLowerCase();
        if (question.includes(input.toLowerCase())) {
          display.push(match);
        }
      });
      setIndex(4);
      setList(display);
    } else {
      setIndex(4);
      setList(props.results);
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
        <div className="QandA-list">
          <SearchForm handleSubmit={handleSubmit} />
          {matches.map((match) => <QuestionListEntry item={match} key={match.question_id} />) }
          <AddQuestion ref={qModal} submit={handleQuestionSubmit} props={props} />
        </div>
        {moreQuestionsButton}
        {lessQuestionsButton}
        <button type="button" onClick={() => qModal.current.open()}>Add a Question</button>
      </div>
    );
  }
  return (
    <button type="button" onClick={() => qModal.current.open()}>Add a Question</button>
  );
}

QuestionList.propTypes = {
  props: PropTypes.shape.isRequired,
  results: PropTypes.arrayOf.isRequired,
  handleQuestionSubmit: PropTypes.func.isRequired,
};

export default QuestionList;
