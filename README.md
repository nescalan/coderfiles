# React JS Challenges

[![N|Escalante](https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-atom-nuclear-energy-vitaliy-gorbachev-blue-vitaly-gorbachev.png)](https://github.com/nescalan)

# React JS Exercises

These exercises will help you apply the basic concepts of React through tiny projects. Once you finish all exercises, you'll know you've got the basics down. Then you can start learning more advanced concepts, and build more complicated projects.

So let's get started!

## Exercise 1: Hello World!

Every programming language starter tutorial teaches you how to output "Hello, World!" using the language.

But this exercise is not just for tradition.

This will asses if you actually know HTML, which is one of the many prerequisites before learning React. Start by rendering a square with a background color. Inside the square, render "Hello, World!".

### Helpful links:

1.- https://www.w3schools.com/html/

2.- https://www.w3schools.com/css/css_align.asp

## Exercise 2: Capturing User Clicks

What makes a web app different from a static website? A web app is interactive. Of course, there's more to web apps than capturing clicks, but it's important to start from the basics.

This exercise gets you started with event handling, which is a basic concept not only in React but also in JavaScript (which is again another pre-requisite before learn React).

Using the native HTML <button> tag, capture the click event and alert the message, "Clicked!".

Take note that capturing events such as clicks is done differently in React than it is in JavaScript.

### Helpful links:

1.- https://reactjs.org/docs/handling-events.html

2.- https://www.w3schools.com/jsref/met_win_alert.asp

## Exercise 3: Custom Component

In the previous exercise, we used the HTML <button> tag. But much of the power that React provides to us developers is being able to create our own components and reuse them.

You'll be creating more complicated custom components than a simple button in the near future, but we all gotta start somewhere.

In this exercise, build your own Button component and render it three times. On user click, it should alert which button was clicked:

The custom component should accept an onClick prop. On render, it should render the children betwen the button. This is the text you want for the button.

Think of it like the HTML <button> tag. Whatever text you place between the opening and closing tag is rendered between the button when you inspect the element in your browser developer console.

On user click, it should alert which button was clicked.

### Helpful links:

1.- https://reactjs.org/docs/components-and-props.html

2.- https://stackoverflow.com/questions/49706823/what-is-this-props-children-and-when-you-should-use-it

3.- https://www.browserstack.com/guide/inspect-element-in-chrome

## Exercise 4: State and Props

So you're comfortable working with props, congratulations! Using props allows us to pass values or functions down to a child component.

State is another integral concept we must learn in React. It allows us to store values, and React automatically updates our UI when the values change.

That's one of the many beautiful things with React. We don't need to manually handle these things - React does the UI re-rendering for us when a value changes. But we must know how to use the state for this purpose.

This exercise is simple, and is a very common React tutorial out there. Use the useState React hook to track how many times a button is clicked, and display the number.

The number must increment each time the button is clicked:

### Helpful link:

1.- React state hook: https://reactjs.org/docs/hooks-state.html

## Exercise 5: Mapping Through A List And Rendering

To get comfortable with React, you must learn declarative programming.

React is a declarative. So you need to think in "declarative programming" whenever you work with React, and this exercise is perfect for that. This is in contrast to "imperative programming" in Vanilla JavaScript.

In this exercise, instead of manually and "imperatively" coding the render of each item in a list, use the map function to "declare" how React should render the list.

Given an array:

```sh
['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
```

Use the map function to render them in an unordered list:

- dog
- cat
- chicken
- cow
- horse
  Once you learn the concept of rendering declaratively, you'll see how much life becomes easier (overstatement).

But think of it this way...

Our example list is not that big, but imagine if the list contains thousands of items, which is true when working with real-life data and real-world applications. **You wouldn't want to manually code each <li> one thousand times, right?**

And what if the data changes? This is the case when working with data in production environment. You'll have to change the code again.

But not when you rendered the list declaratively. When the data changes, and you rendered your data presentation declaratively, a.k.a. the smart way, then your declarative code does the change for you.

Helpful links:

1.- Declarative programming vs. imperative programming
2.- map() function
3.- rendering lists in React

| Topic                                              | Link                                                                                               |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Declarative programming vs. imperative programming | [https://learn.co/lessons/react-declarative-programming][pldb]                                     |
| map() function                                     | [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map][plgh] |
| rendering lists in React                           | [https://reactjs.org/docs/lists-and-keys.html][plgd]                                               |
