import React from "react";
import ReactDOM  from "react-dom/client";

const elem = <span>
  React Element
</span>


const TitleNew = function (){
 return (
    <h1 className="head" tabIndex="1">
      Namaste React using JSX
    </h1>
  )
}
const HeadingComponent = () => <h1 className="heading">Namaste React Functional Component</h1>;

const number = 1000;

const Title = () =>
  (<h1 className="head" tabIndex="1">
    {elem}
    Namaste React using JSX
  </h1>
);

// const data = api.getData();
//suppose api sends some malicious data -- cross site scripting -- read local storage, cookies, read data stc... if i can run js in your browser or computer. JSX takes care of these injection attacks jsx will escape thing, it will sanitize the data, when the data is in {}. It prevents injection attacks.

// How can i put react element(title) inside component
const HeadingComponent1 = () => (
 <div id="container">
   
   {
    // Any piece of JS Code
    // can call JS function
    // Title()
    1 + 2
    }
    <Title />
    {/* {data} */}
   
   <h1 className="heading"s>Namaste React Functional Component</h1>
 </div>
);


  
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent1 />);
