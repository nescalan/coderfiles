import "./ClickButton.css";

const ClickButton = (props) => {
  return (
    <button onClick={() => console.log("clicked")} className="btn">
      {props.children}
    </button>
  );
};

export { ClickButton };
