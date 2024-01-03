import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=> {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  
  useEffect(()=>{
    console.log('useeffect called!');
    fetchData();
    
  },[]);

  const fetchData = async ()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

    return  listOfRestaurants.length === 0 ? <Shimmer /> :  (
      <div className="body">
        <div className="filter">

         <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
            <button onClick={()=>{
              // Filter the restaurant and update the UI

             const filteredRestaurant = listOfRestaurants.filter((res)=>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())             
                    )
              //  searchText
              setFilteredRestaurant(filteredRestaurant)
              console.log('searchText',searchText)
            }}>Search</button>
         </div>

           <button className="filter-btn" onClick={()=>{
             // Filter logic
             const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4);
             setListOfRestaurants(filteredList)  
           }}>Top Rated Restaurant</button>
        </div>
         <div className="res-container">
         {
          filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>  
          ))
          }
         </div>
      </div>  
    )
  }
  export default Body;