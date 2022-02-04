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
