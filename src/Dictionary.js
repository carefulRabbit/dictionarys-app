import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function Search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="dictionary">
      <form onSubmit={Search}>
        <input
          type="search"
          placeholder="Search a word"
          autoComplete={false}
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}