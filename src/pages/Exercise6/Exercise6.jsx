import { ItemList } from "../../components";

const animals = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "chicken" },
  { id: 4, name: "cow" },
  { id: 5, name: "horse" },
];
function Exercise6() {
  return (
    <>
      <div className="container ">
        <h1>
          Exercise 6: Mapping Through A List And Rendering (With A Custom
          Component)
        </h1>
        <p>Render a list of articles</p>
        <div className="button-container">
          <ItemList Items={animals} />
        </div>
      </div>
    </>
  );
}

export { Exercise6 };
