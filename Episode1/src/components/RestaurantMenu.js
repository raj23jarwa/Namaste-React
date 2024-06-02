import React from "react";
import { CDN_URL } from "../utils/constant";
import useRestaurantMenu from '../utils/useRestaurantMenu'
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

      const resInfo= useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
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

  return (
    <div className="restaurantMenu">
      <h1>{name}</h1>
      <div id="restInfoCard">
        <div className="resImage">
          <img src={CDN_URL + cloudinaryImageId} alt="restaurantImage"></img>
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
                {sla.minDeliveryTime} -{sla.maxDeliveryTime}{" "}
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
    </div>
  );
};

export default RestaurantMenu;
