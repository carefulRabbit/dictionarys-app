import React from "react";

export default function Phonetics(props){
    return (
      <div className="Phonetics">
        <span>
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
          </a>
        </span>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
}