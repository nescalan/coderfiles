import "./Exercise8.css";
const jokes = [
  {
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit",
  },
  {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#",
  },
];

const Exercise8 = () => {
  return (
    <div className="container">
      <h1>Exercise 8: Rendering JSON</h1>
      <div className="flex-container">
        {jokes.map((joke) => (
          <div className="flex-items" key={joke.id}>
            <h4>{joke.setup}</h4>
            <p> {joke.punchline} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Exercise8 };
