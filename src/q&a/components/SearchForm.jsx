import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchForm({ handleSubmit }) {
  const [entry, setEntry] = useState('');

  const onSubmit = (input) => {
    event.preventDefault();
    handleSubmit(input);
  };

  return (
    <form>
      <input
        className="question-searchbar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={(e) => {
          setEntry(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          onSubmit(entry);
          setEntry('');
        }}
      >
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
