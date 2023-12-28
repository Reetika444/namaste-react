import React from "react"
import  ReactDOM  from "react-dom/client";


// Nested Elements
{/* <div id="parent">
    <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
        // siblings h1,h2
    </div>
    <div id="child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
        // siblings h1,h2
    </div>
</div> */}


const parent = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{},"This is Namaste React"),React.createElement("h2",{},"I am an h2 tag")]), 
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")])
]

);


// JSX Exists



// add siblings -- third attribute(add more than one children convert this to array of different children)

// const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, 
// [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
// )
// );


// const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, 
// React.createElement("h1",{},"I am an h1 tag")
// )
// );
console.log('parent',parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// replacing earlier content with new content(parent)

// Parent is react element(normal JS oject) => HTML(Browser uderstands)root.render()
// const heading =  React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World From React!")
// console.log('heading',heading);
// // heading is react h1 element(normal js object) --- props(children(3rd thing) and attributes(2nd thing))
// // {} : give attributes to the tags
// //  create root in react where dom stuff/Manipulation happens
// // simple api
// // created root
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // render heading inside root  converting react h1 element into html h1 tag and put it into this dom
// root.render(heading);
