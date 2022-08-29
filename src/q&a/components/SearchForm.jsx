import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ handleSubmit }) {
  const onChange = (input) => {
    handleSubmit(input);
  };

  return (
    <form>
      <input
        className="question-searchbar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </form>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
