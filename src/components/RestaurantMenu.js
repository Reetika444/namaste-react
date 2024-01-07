import React from "react"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
const RestauarntMenu = ()=>{
//  const [resInfo, setResInfo] = useState(null)
 const [menuInfo, setMenuInfo] = useState(null)

 useEffect(()=>{
    fetchMenu();
 },[])

 const fetchMenu = async() => { 
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const json = await data.json();
    // setResInfo(json.data)
    const menuData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=10892&catalog_qa=undefined&submitAction=ENTER");
    const json = await menuData.json();
    setMenuInfo(json.data)
    console.log('json.data',json.data)
 }

 if( menuInfo === null  ) {
    return <Shimmer/>
};
   
const { name,description,category} = menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info ;
const { itemCards } = menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;

    return( 
        <div className="menu">
            <h1>{name}</h1>
            <h3>{description}</h3>
            <h3>{category}</h3>
            <h3>{menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
            {/* <h3>{ menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.cuisines.join(" , ")}</h3> */}
            {/* <h3>{ menuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.costForTwo}</h3> */}
            <h2>Menu</h2>
             <ul>
               {itemCards.map((data)=>{
              return  <li key={data.id}>{data.card.info.name}</li>
               }
               )}

                {/* <li>{itemCards[0].card.info.name}</li>
                <li>Burgers</li>
                <li>Diet Coke</li> */}
             </ul>
        </div>
    );
};
export default RestauarntMenu   