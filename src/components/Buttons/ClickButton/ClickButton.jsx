import "./ClickButton.css";

const ClickButton = ({ children, id }) => {
  const handleClick = (id) => {
    alert("You clicked the button number: " + id);
  };

  return (
    <button className="btn" onClick={() => handleClick(id)}>
      {children}
    </button>
  );
};

export { ClickButton };
