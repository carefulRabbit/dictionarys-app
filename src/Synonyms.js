import React from "react";

export default function Synonyms(props){
    console.log(props)
    if(props.synonyms){
        return (
          <div className="Synonym">
            <ul>
              {props.synonyms.map(function (synonym, index) {
                if (index < 10) {
                  return <li key={index}> {synonym} </li>;
                } else {
                  return null;
                }
              })}
            </ul>
          </div>
        );
    }else{
        return(null);
    }
}