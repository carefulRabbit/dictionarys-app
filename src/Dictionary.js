import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let[loaded, setLoaded] = useState(false);
  let[photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function handlePexelR(response){
    setPhotos(response.data.photos);
  }
  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelApi = "563492ad6f91700001000001017121979ab945dc8fb1b1380f411fd7";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let pexelHeader = {Authorization: `Bearer ${pexelApi}`};
    axios.get(pexelsUrl,{headers: pexelHeader}).then(handlePexelR);
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
        <Photos photos={photos} />
      </div>
    );
  }else{
    Load();
  }
    
  
}
