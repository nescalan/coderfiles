import React from "react";
import "./JokesCard.css";

const JokesCard = ({ jokes }) => {
  return (
    <div className="flex-container">
      {jokes.map((joke) => (
        <div className="flex-items" key={joke.id}>
          <h4>{joke.setup}</h4>
          <p> {joke.punchline} </p>
        </div>
      ))}
    </div>
  );
};

export { JokesCard };
