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
  {
    id: 3,
    setup: "What is the biggest lie in the entire universe?",
    punchline: "I have read and agree to the Terms & Conditions.",
  },
  {
    id: 4,
    setup: "halloween?",
    punchline: "This is halloween",
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
