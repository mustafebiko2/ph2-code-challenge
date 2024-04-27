// SearchInput.js

import React from 'react';

function SearchInput({ searchTerm, onSearchTermChange }) {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;

