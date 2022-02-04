import React, { useState } from "react";
import { BtnCounter } from "../../components";

function Exercise4() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container ">
      <h1>Exercise 4: State and Props</h1>

      <p>Button has been clicked: {counter} </p>
      <div className="button-container">
        <BtnCounter counter={counter} setCounter={setCounter}>
          Counter
        </BtnCounter>
      </div>
    </div>
  );
}

export { Exercise4 };
