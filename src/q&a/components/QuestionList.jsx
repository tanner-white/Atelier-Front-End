/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionListEntry from './QuestionListEntry.jsx';

function QuestionList({ props }) {
  return (
    <div>
      {props.results.map((item) => <QuestionListEntry item={item} />) }
    </div>
  );
}

QuestionList.propTypes = {
  props: PropTypes.shape.isRequired,
  results: PropTypes.arrayOf.isRequired,
};

export default QuestionList;
