import { JokesCard } from "../../components";
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

const stories = [
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
      <JokesCard jokes={jokes} />
    </div>
  );
};

export { Exercise8 };
