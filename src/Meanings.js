import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em className="example">{definition.example}</em>
            </p>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
