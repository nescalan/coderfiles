const animals = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "chicken" },
  { id: 4, name: "cow" },
  { id: 5, name: "horse" },
];
function Exercise5() {
  return (
    <>
      <div className="container ">
        <h1>Exercise 5: Mapping Through A List And Rendering</h1>
        <p>Render a list of articles</p>
        <div className="button-container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {animals.map((animal) => (
                <tr key={animal.id}>
                  <th scope="row">{animal.id}</th>
                  <td>{animal.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export { Exercise5 };
