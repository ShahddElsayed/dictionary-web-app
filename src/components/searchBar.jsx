import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../images/icon-search.svg";

const SearchBar = ({ onSearch }) => {
  const [word, setWord] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!word.trim()) {
      setError(true);
    } else {
      setError(false);
      onSearch(word);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="search for any word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className={`search-input ${error ? "input-error" : ""}`}
        />
        <button type="submit" className="search-button">
          <SearchIcon className="search-icon" />
        </button>
      </div>
      {error && <p className="error">Please enter a word</p>}
    </form>
  );
};

export default SearchBar;
