import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// Destructuring is in JS

const AppLayout = () => {
  // console.log(<Body />)   === object is react virtual DOM(Normal or nested  JS Object)
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Header
      Body
      Footer
       */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />);
