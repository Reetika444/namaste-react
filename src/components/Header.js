import React , {useState, useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
export const Header = ()=>{
  console.log('header rendered')
 
  const [btnName, setBtnName] = useState("Login");

  useEffect(()=>{
   console.log('useEffect called in header')
  },[btnName])
  
    return (
      <div className="header">
         <div>
           <img className="logo" src={LOGO_URL} />
         </div>
         <div className="nav-items">
           <ul>
             <li>
              <Link to="/">Home</Link>
              </li>
             <li>
              <Link to="/about">About Us</Link>
            </li> 
             
             {/* <li >
              <a href="/about">About Us</a>
              </li> */}
             <li>
             <Link to="/contact">Contact Us</Link>
              </li>
             <li>Cart</li>
             <button onClick={()=>{
               {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}
            }} className="login">{btnName}</button>
           </ul>
         </div>
      </div>
    )
  }
export default Header;  