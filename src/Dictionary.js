import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let[loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    Search();
  }
  function Load(){
    setLoaded(true);
    Search()
  }
  if(loaded){
    return (
      <div className="Dictionary">
        <section>
          <h1>What do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              placeholder={props.defaultKeyword}
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  }else{
    Load();
  }
    
  
}
