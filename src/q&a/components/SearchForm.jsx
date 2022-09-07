/* eslint-disable react/prop-types */
import React from 'react';

function SearchForm({ handleSubmit, isDarkMode }) {
  const onChange = (input) => {
    input.preventDefault();
    handleSubmit(input.target.value);
  };

  return (
    <form id="search-form">
      <input
        className="question-searchbar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        style={{ background: isDarkMode ? '#E2ECEB' : null }}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </form>
  );
}

export default SearchForm;
