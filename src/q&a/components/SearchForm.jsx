import React, { useState } from 'react';

function SearchForm() {
  const [entry, setEntry] = useState('');

  return (
    <form>
      <input
        className="question-searchbar"
        type="text"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={(e) => {
          console.log(entry);
          setEntry(e.target.value);
        }}
      />
    </form>
  );
}

export default SearchForm;
