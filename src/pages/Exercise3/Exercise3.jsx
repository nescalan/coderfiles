import { ClickButton } from "../../components/";
import "./Exercise3.css";

const Exercise3 = () => {
  return (
    <div className="container ">
      <h1>Exercise 3: Custom Component</h1>
      <div className="button-container">
        <ClickButton id="1">Button 1</ClickButton>
        <ClickButton id="2">Button 2</ClickButton>
        <ClickButton id="3">Button 3</ClickButton>
      </div>
    </div>
  );
};

export { Exercise3 };
