const animals = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "chicken" },
  { id: 4, name: "cow" },
  { id: 5, name: "horse" },
];
function Exercise5() {
  const listItems = animals.map((animal) => (
    <li key={animal.id}>{animal.name}</li>
  ));
  return (
    <>
      <div className="container ">
        <h1>Exercise 5: Mapping Through A List And Rendering</h1>
        <p>Render a list of articles</p>
        <div className="button-container">
          <ul>{listItems}</ul>
          <br />
        </div>
      </div>
    </>
  );
}

export { Exercise5 };
