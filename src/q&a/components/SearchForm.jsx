import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ handleSubmit }) {
  const onChange = (input) => {
    input.preventDefault();
    handleSubmit(input.target.value);
  };

  return (
    <form>
      <input
        className="question-searchbar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={(e) => {
          onChange(e);
        }}
      />
    </form>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
