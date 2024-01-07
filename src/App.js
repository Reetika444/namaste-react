import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestauarntMenu from "./components/RestaurantMenu";

// Destructuring is in JS

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />

      {/** if path is / */}
      {/* <Body /> */}

      {/**  if path is /about */}
      {/* <About /> */}
     
      {/** if path is /contact */}
      {/* <Contact /> */}

      {/* Header
      Body
      Footer
       */}
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
       path: '/',
       element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },{
        // Dynamic Path
        path: "/restaurants/:resId",
        element: <RestauarntMenu />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<RouterProvider router={appRouter} />
);
