import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container">
        <h1>React JS Coding Challenges</h1>
        <h2>Exercise 1: Hello World!</h2>
        <p>
          Every programming language starter tutorial teaches you how to output
          "Hello, World!" using the language.
        </p>

        <p>But this exercise is not just for tradition.</p>

        <p>
          This will asses if you actually know HTML, which is one of the many
          prerequisites before learning React. Start by rendering a square with
          a background color. Inside the square, render "Hello, World!".
        </p>
        <img
          src="https://coderfiles.dev/static/f6bc72bb3dabb3819e3d9241fabbb476/1464b/ex1.webp"
          alt="exercise1"
        />
        <p>
          Helpful links:
          <ul>
            <li>
              <a href="https://www.w3schools.com/html/">HTML</a>
            </li>
            <li>
              <a href="https://www.w3schools.com/css/css_align.asp">
                how to center a text inside a div
              </a>
            </li>
          </ul>
        </p>
        <hr />
      </div>
      <div className="container">
        <h1>Exercise 2: Capturing User Clicks</h1>
        <p>
          What makes a web app different from a static website? A web app is
          interactive. Of course, there's more to web apps than capturing
          clicks, but it's important to start from the basics.
        </p>

        <p>
          This exercise gets you started with event handling, which is a basic
          concept not only in React but also in JavaScript (which is again
          another pre-requisite before learn React).
        </p>

        <p>
          Using the native HTML <button>button</button> tag, capture the click
          event and alert the message, "Clicked!".
        </p>

        <p>
          Take note that capturing events such as clicks is done differently in
          React than it is in JavaScript.
        </p>

        <img
          src="https://media.giphy.com/media/QseBpgmWRAUrgpxtGj/source.gif"
          alt="exercise2"
        />
        <p>
          Helpful links:
          <ul>
            <li>
              <a href="https://reactjs.org/docs/handling-events.html">
                Handling events in React
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/jsref/met_win_alert.asp">
                alert() method
              </a>
            </li>
          </ul>
        </p>
        <hr />
      </div>
      <div className="container">
        <h1>Exercise 3: Custom Component</h1>
        <p>
          In the previous exercise, we used the HTML <button></button> tag. But
          much of the power that React provides to us developers is being able
          to create our own components and reuse them.
        </p>

        <p>
          You'll be creating more complicated custom components than a simple
          button in the near future, but we all gotta start somewhere.
        </p>

        <p>
          In this exercise, build your own Button component and render it three
          times. On user click, it should alert which button was clicked:
        </p>
        <img
          src="https://media.giphy.com/media/4C72sQTzuysQ71m8sw/source.gif"
          alt="exercise 3"
        />

        <p>
          Helpful links:
          <ul>
            <li>
              <a href="https://reactjs.org/docs/handling-events.html">
                Handling events in React
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/jsref/met_win_alert.asp">
                alert() method
              </a>
            </li>
          </ul>
        </p>
        <hr />
      </div>
      <div className="container">
        <h1>Exercise 4: State and Props</h1>
        <p>
          So you're comfortable working with props, congratulations! Using props
          allows us to pass values or functions down to a child component.
        </p>
        <p>
          State is another integral concept we must learn in React. It allows us
          to store values, and React automatically updates our UI when the
          values change.
        </p>
        <p>
          That's one of the many beautiful things with React. We don't need to
          manually handle these things - React does the UI re-rendering for us
          when a value changes. But we must know how to use the state for this
          purpose.
        </p>
        <p>
          This exercise is simple, and is a very common React tutorial out
          there. Use the useState React hook to track how many times a button is
          clicked, and display the number. The number must increment each time
          the button is clicked:
        </p>
        <img
          src="https://media.giphy.com/media/My670LXjzJvHTgcjU3/source.gif"
          alt="exercise 4"
        />
        <p>
          Helpful links:
          <ul>
            <li>
              <a href="https://reactjs.org/docs/hooks-state.html">
                React state hook
              </a>
            </li>
          </ul>
        </p>
        <hr />
      </div>

      <div className="container">
        <h1>Exercise 5: Mapping Through A List And Rendering</h1>
        <p>
          To get comfortable with React, you must learn declarative programming.
        </p>

        <p>
          React is a declarative. So you need to think in "declarative
          programming" whenever you work with React, and this exercise is
          perfect for that. This is in contrast to "imperative programming" in
          Vanilla JavaScript.
        </p>

        <p>
          In this exercise, instead of manually and "imperatively" coding the
          render of each item in a list, use the map function to "declare" how
          React should render the list.
        </p>

        <p>Given an array:</p>

        <code>['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']</code>

        <p>Use the map function to render them in an unordered list:</p>

        <ul>
          <li>dog</li>
          <li>cat</li>
          <li>chicken</li>
          <li>cow</li>
          <li>horse</li>
        </ul>
        <p>
          Once you learn the concept of rendering declaratively, you'll see how
          much life becomes easier (overstatement).
        </p>

        <p>But think of it this way...</p>

        <p>
          Our example list is not that big, but imagine if the list contains
          thousands of items, which is true when working with real-life data and
          real-world applications.{" "}
          <span>
            You wouldn't want to manually code each <code>li</code> one thousand
            times, right?
          </span>
        </p>

        <p>
          And what if the data changes? This is the case when working with data
          in production environment. You'll have to change the code again.
        </p>

        <p>
          But not when you rendered the list declaratively. When the data
          changes, and you rendered your data presentation declaratively, a.k.a.
          the smart way, then your declarative code does the change for you.
        </p>

        <p>
          Helpful links:
          <ul>
            <li>
              <a href="https://learn.co/lessons/react-declarative-programming">
                Declarative programming vs. imperative programming
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">
                map() function
              </a>
            </li>
            <li>
              <a href="https://reactjs.org/docs/lists-and-keys.html">
                Rendering lists in React
              </a>
            </li>
          </ul>
        </p>
        <hr />
      </div>
      <div className="container">
        <h1>
          Exercise 6: Mapping Through A List And Rendering (With A Custom
          Component)
        </h1>
        <p>
          In exercise 3, we mentioned that part of what makes React so great is
          that it allows us to create our custom, re-usable components.
        </p>
        <p>
          You only created a custom button there. This time, you'll create a
          custom component that displays each item from exercise 5:
        </p>
        <p>['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']</p>
        <p>
          Instead of using the <code> ul </code> and <code> li </code> HTML
          tags, create a custom component that accepts a list as its prop, and
          renders it accordingly.
        </p>
        <p>
          It's up to you how you want this list will look like. I decided mine
          to look like this:
        </p>
        <img
          src="https://coderfiles.dev/static/ac33f6d2673177e812df7d2088d65fa3/98399/ex6b.webp"
          alt="exercise 6"
        />
        <p>
          What's the point of creating custom components? You'll be able to
          re-use them. Think of it like creating your own functions.
        </p>
        <p>
          Instead of copy-pasting the same lines of code everywhere you need
          them, you put those blocks of code inside a separate function, and you
          just call that function whenever you need it.
        </p>
        <p>
          This is very good practice because if you need to make changes to your
          code, you don't need to change it in every place where you used it.
          You just need to change it in one place.
        </p>
        <p>
          That's one of the many benefits of using custom components. There are
          more reasons to using custom components, which needs a whole new blog
          post, but this is a good start.
        </p>
        <p>
          Helpful links:
          <ul>
            <li>
              <a href="https://reactjs.org/docs/components-and-props.html">
                React props and components
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">
                map() function
              </a>
            </li>
            <li>
              <a href="https://reactjs.org/docs/lists-and-keys.html">
                Rendering lists in React
              </a>
            </li>
          </ul>
        </p>
        <hr />
      </div>
      <div className="container">
        <h1>Exercise 7: Building A Form</h1>
        <p>
          Unleash some more power from React by building a form. React is great
          for this.
        </p>
        <img
          src="https://media.giphy.com/media/JtjlF8GzLQZrJnu1st/source.gif"
          alt="Exercise 7"
        />
        <p>
          Build a form that accepts a first name and a last name. And instead of
          a boring "Submit" button, make a button that says "Greet Me" that when
          clicked, will alert "Hello [first name] [last name]!".
        </p>
        <p>
          Here you will use a combination of concepts from previous exercises,
          such as using state, and event listening both on text input and button
          click.
        </p>
        <p>But there is one specific concept we didn't tackle yet:</p>

        <p>
          Helpful links:
          <ul>
            <li>
              <a href="https://reactjs.org/docs/forms.html">
                React forms and onChange() function
              </a>
            </li>
          </ul>
        </p>
        <hr />
      </div>
    </>
  );
};

export { Home };
