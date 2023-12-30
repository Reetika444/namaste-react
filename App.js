import React from "react";
import ReactDOM  from "react-dom/client";

// React Elements are equivalent to DOM Elements(HTML Elements). React Element is not HTML Element. It is object.
// React.createElement => ReactElement(JS object) => when we render this on to the DOM, It becomes HTMLElement(render).

// const heading = React.createElement("h1",{id:"heading"},"reetika");

// console.log(heading)

// JSX (transpiled before it reaches js engine) - PARCEL - Babel(normal js package) JSX convert it to code what react,js engine understands
// JSX => Babel transpiles it to React.createElement => ReactElement(JS object) => when we render this on to the DOM, It becomes HTMLElement(render).

// If JSX is in single line, this is good
// If JSX in multiple lines, you have to wrap around --round () brackets -- Mandatory
const heading = (<h1 className="head" tabIndex="1">Namaste React using JSX</h1>)

console.log(heading)

// jsxHeading is react element(object)


// React Components

//   Two Types of component
//     A. Class based Components - OLD - JS Classes
//     B. Functional Components - NEW  - JS Functions


//  React Functional Component is normal JS Function which returns some piece of JSX Element/Code or A funtion which returns react element
//  Name it with capital letter
const HeadingComponent = () => <h1 className="heading">Namaste React Functional Component</h1>;
// or both are same

// Akshay saini prefers with return
const HeadingComponent1 = () => (
 <div id="container">
   <h1 className="heading"s>Namaste React Functional Component</h1>;
 </div>
);

const fn = () => true;  // function is returning true - short hand Both functions are same (arrow functions)
const fn1= ()=>{
    return true;
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading);

// It is not developer friendly(tough)or not readable, therefor JSX Comes.
// JSX is not part of React. JSX is not HTML inside JS. JSX is HTML-like or XML-like syntax.
// We can write React without JSX also. JSX makes developer life easy.It is an extension where we can merge HtML and JS.
