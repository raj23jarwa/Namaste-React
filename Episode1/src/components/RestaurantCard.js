import React, { useContext } from 'react'
import { CDN_URL } from '../utils/constant'
import UserContext from '../utils/UserContext'
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
     const {loggedInUser} =useContext(UserContext)
    return(
    <div className="resCard flex flex-col w-60 items-center border border-black p-2 rounded-xl shadow-xl shadow-gray-400">
        <img src={CDN_URL+cloudinaryImageId} alt="image" className='w-50 h-30 rounded-xl'></img>
        <div className="cardInfo">
            <h3 className="name text-xl font-semibold">{name}</h3>
            <span className="area">{locality+", "}</span>
            <span>{areaName}</span>
           
            <p className="rating">
                <span><i className="fa-solid fa-star"></i>{avgRating} &nbsp;</span>
                {/* <span>{costForTwo}</span> */}
                <span>{sla.lastMileTravelString}</span> 
                
            </p>
            <p className="cost">{costForTwo}</p>
            <p className="cuisines">{cuisines.join(", ")}</p>
            <p>User:{loggedInUser}</p>
        </div>
    </div>
    )
}

// HigherOrder component
// Input RestaurantCard ==> output promotedRestaurantCard

export const withPromotedLabel =(RestaurantCard)=>{
    return(props) =>{
        return (
           <div>
            <label className='absolute bg-black text-white p-2 m-2'> Promoted</label>
            <RestaurantCard {...props}/>
           </div>
        )
    }
}

export default RestaurantCard