import React from 'react'
import { CDN_URL } from '../utils/constant'
const RestaurantCard =({
    cloudinaryImageId,
    cuisines,
    name,
    locality,
    areaName,
    costForTwo,
    avgRating,
    sla,

}) =>{
    
    return(
    <div className="resCard">
        <img src={CDN_URL+cloudinaryImageId} alt="image"></img>
        <div className="cardInfo">
            <p className="name">{name}</p>
            <span className="area">{locality+", "}</span>
            <span>{areaName}</span>
           
            <p className="rating">
                <span><i className="fa-solid fa-star"></i>{avgRating} &nbsp;</span>
                {/* <span>{costForTwo}</span> */}
                <span>{sla.lastMileTravelString}</span> 
                
            </p>
            <p className="cost">{costForTwo}</p>
            <p className="cuisines">{cuisines.join(", ")}</p>
        </div>
    </div>
    )
}


export default RestaurantCard