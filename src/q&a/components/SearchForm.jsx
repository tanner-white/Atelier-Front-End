import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchForm({ handleSubmit }) {
  const [entry, setEntry] = useState('');

  const onChange = (input) => {
    setEntry(input);
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
