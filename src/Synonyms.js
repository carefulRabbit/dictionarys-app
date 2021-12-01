import React from "react";

export default function Synonyms(props){
    console.log(props)
    if(props.synonyms){
        return (
          <ul>
            {props.synonyms.map(function (synonym, index) {
              if(index <5){
                return <li key={index}> {synonym} </li>;
              }
            })}
          </ul>
        );
    }else{
        return(null);
    }
}