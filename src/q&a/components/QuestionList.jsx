/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React, { useState, useEffect, useRef } from 'react';
import SearchForm from './SearchForm.jsx';
import QuestionListEntry from './QuestionListEntry.jsx';
import AddQuestion from './AddQuestionModal.jsx';

function QuestionList({
  props, handleQuestionSubmit, onReport, currentProductName,
}) {
  const [list, setList] = useState([]);
  const [matches, setMatches] = useState([]);
  const [index, setIndex] = useState(2);
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
      setIndex(2);
      setList(display);
    } else {
      setIndex(2);
      setList(props.results);
    }
  };

  const showMoreQuestions = () => {
    setIndex(index + 2);
  };

  const showLessQuestions = () => {
    setIndex(2);
  };

  const moreQuestionsButton = list.slice(index).length > 0
    ? (
      <button className="question-buttons" type="submit" onClick={showMoreQuestions}>MORE QUESTIONS</button>
    ) : null;

  const lessQuestionsButton = matches.length > 2
    ? (
      <button className="question-buttons" type="submit" onClick={showLessQuestions}>COLLAPSE QUESTIONS</button>
    ) : null;

  if (matches) {
    return (
      <div className="QandA-widget">
        <div className="QandA-list">
          <SearchForm handleSubmit={handleSubmit} />
          {matches.map((match) => (
            <QuestionListEntry
              item={match}
              onReport={onReport}
              currentProductName={currentProductName}
              key={match.question_id}
            />
          )) }
          <AddQuestion
            ref={qModal}
            submit={handleQuestionSubmit}
            props={props}
            currentProductName={currentProductName}
          />
        </div>
        <div id="question-button-div">
          {moreQuestionsButton}
          {lessQuestionsButton}
          <button className="question-buttons" type="button" onClick={() => qModal.current.open()}>ADD A QUESTION +</button>
        </div>
      </div>
    );
  }
  return (
    <button type="button" onClick={() => qModal.current.open()}>Add a Question</button>
  );
}

export default QuestionList;
