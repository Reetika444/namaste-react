import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=> {
// local state variable super powerful variaBble we use react hook known as usestate - scope of local state variable is inside component
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

// normal JS Variable
  // let listOfRestaurants = [
  //   { 
  //     "info":{
  //     "id": "41102",
  //     "name": "Hotel Empire",
  //     "cloudinaryImageId": "l5sjr78yn3vhopcvqgfb",
  //     "costForTwo": "₹450 for two",
  //     "cuisines": [
  //       "North Indian",
  //       "Kebabs",
  //       "Biryani"
  //     ],
  //     "avgRating": 4,
  //     "sla": {
  //       "deliveryTime": 34,
  //     },
  //   }
  //   },
  //   {
  //     "info":{
  //     "id": "41103",
  //     "name": "Dominos",
  //     "cloudinaryImageId": "l5sjr78yn3vhopcvqgfb",
  //     "costForTwo": "₹450 for two",
  //     "cuisines": [
  //       "North Indian",
  //       "Kebabs",
  //       "Biryani"
  //     ],
  //     "avgRating": 4.5,
  //     "sla": {
  //       "deliveryTime": 34,
  //     },
  //   }
  // }
  // ];

    return (
      <div className="body">
        <div className="filter">
           <button className="filter-btn" onClick={()=>{
             // Filter logic
             const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4);
             setListOfRestaurants(filteredList)  
            //  console.log('listOfRestaurants',listOfRestaurants)
            //  our data is filtered but ui is not updated
           }}>Top Rated Restaurant</button>
        </div>
         <div className="res-container">
         {
          listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>  
          ))
          }
            {/* RestaurantCard */}
             {/* make your code modular */}
            {/* <RestaurantCard  resData= {resList[0]} />
            <RestaurantCard  resData={resList[1]}/>
            <RestaurantCard  resData={resList[2]}/>
            <RestaurantCard  resData={resList[3]}/>
            <RestaurantCard  resData={resList[4]}/>
            <RestaurantCard  resData={resList[5]}/>
            <RestaurantCard  resData={resList[6]}/>
            <RestaurantCard  resData={resList[7]}/>
            <RestaurantCard  resData={resList[8]}/>          
            
            Make your code dynamic using map, filter,reduce rather than static above code.IMP- Each of the list item should be uniqually identified
            not using keys(not acceptable  <<<< index as key <<<<< unique id(Best Practice))
            */}
         
         </div>
      </div>  
    )
  }
  export default Body;