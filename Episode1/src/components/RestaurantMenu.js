import React from "react";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from '../utils/useRestaurantMenu'
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const [showItemList,setShowItemList] =useState(false)

      const resInfo= useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const handleAccordion=()=>{
   setShowItemList(showItemList)
  }

  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    locality,
    sla,
    feeDetails,
  } = resInfo.cards[2].card.card.info;
   
  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log("categories",categories)
  const restCategories=categories.filter(c=>c.card?.["card"]?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log("restCtaegories:",restCategories)
  return (
    <div className="restaurantMenu flex flex-col justify-center items-center w-50 m-2 p-2" >
      <h1 className="text-2xl font-bold p-2">{name}</h1>
      <div id="restInfoCard" className="flex gap-6 border text-lg items-center border-black p-4">
        <div className="resImage w-80" >
          <img src={CDN_URL + cloudinaryImageId} alt="restaurantImage" className="rounded-xl"></img>
        </div>
        <div className="resInfo">
          <div id="ratingCost">
            <ul>
              <li>
                <i className="fa-solid fa-star"></i>
                {avgRating} &nbsp; ({totalRatingsString}) &nbsp;&nbsp;{" "}
                {costForTwoMessage}
              </li>
              <li>{cuisines.join(", ")}</li>
            </ul>
          </div>
          <div id="place">
            <ul>
              <li>Outlet:{locality}</li>
              <li>
                {sla.minDeliveryTime} -{sla.maxDeliveryTime}{" "} mins
              </li>
            </ul>
          </div>
          <div id="delievery">
            <ul>
              {feeDetails.message ? (
                <li>
                  {" "}
                  <b>{feeDetails.message.replace(/<[^>]*>/g, "")} </b>
                </li>
              ) : (
                <li>
                  <b> Restaurant Distance is not available. </b>{" "}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/*categories accordion */}

      {restCategories.map((category) =>(
               <RestaurantCategory data={category?.card?.card}/>
        
      ))}
    </div>
  );
};

export default RestaurantMenu;
