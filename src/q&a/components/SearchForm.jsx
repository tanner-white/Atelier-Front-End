/* eslint-disable react/prop-types */
import React from 'react';

function SearchForm({ handleSubmit, isDarkMode }) {
  const onChange = (input) => {
    input.preventDefault();
    handleSubmit(input.target.value);
  };

  const darkMode = isDarkMode ? 'question-searchbar-dark-mode' : 'question-searchbar';

  return (
    <form id="search-form">
      <input
        className={darkMode}
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={(e) => {
          onChange(e);
        }}
      />
    </form>
  );
}

export default SearchForm;
