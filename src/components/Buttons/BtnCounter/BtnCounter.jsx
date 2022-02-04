// import "./BtnCounter.css";
function BtnCounter(props) {
  const handleCounterClick = () => {
    props.setCounter((prevState) => prevState + 1);
  };

  return (
    <button className="btn" onClick={() => handleCounterClick()}>
      <p>{props.children}</p>
    </button>
  );
}

export { BtnCounter };
