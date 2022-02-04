const Exercise2 = () => {
  return (
    <div className="container ">
      <h1>Exercise 2: Capturing User Clicks</h1>
      <div className="button-container">
        <button className="btn" onClick={() => alert("Clicked!!!")}>
          Primary
        </button>
      </div>
    </div>
  );
};

export { Exercise2 };
