import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=> {
// local state variable super powerful variaBble we use react hook known as usestate - scope of local state variable is inside component
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  
  //code should be here, After rendering the component.As soon as render cycle is completed, we will call useEffect callback function
  useEffect(()=>{
    console.log('useeffect called!');
    fetchData();
  },[]);

  // fetch function (superpower) given to us by browser, which js engine has. fetch returns promise.
  const fetchData = async ()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log('json',json)
    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  
  // Conditional Rendering : rendering according to the condition
  // if(listOfRestaurants.length === 0){
  //    return <Shimmer />
  // } 
 // Ternary operator 
    return  listOfRestaurants.length === 0 ? <Shimmer /> :  (
      <div className="body">
        <div className="filter">
           <button className="filter-btn" onClick={()=>{
             // Filter logic
             const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4);
             setListOfRestaurants(filteredList)  
           }}>Top Rated Restaurant</button>
        </div>
         <div className="res-container">
         {
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>  
          ))
          }
         </div>
      </div>  
    )
  }
  export default Body;