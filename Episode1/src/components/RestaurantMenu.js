import React, { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    const fetchMenu = async () => {
        try {
            const response = await fetch(`${MENU_URL}${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
            const data = await response.json();
            console.log("Menu api:", data);
            setResInfo(data.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
            // Handle error - e.g., display an error message
        }
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, avgRating, costForTwoMessage, totalRatingsString, cuisines, locality, sla, feeDetails } = resInfo.cards[2].card.card.info;

    return (
        <div className="restaurantMenu">
            <h1>{name}</h1>
            {/* <h2>Menu</h2>
            <ul>
                <li>{costForTwoMessage}</li>
                <li>{avgRating}</li>
                <li>menu3</li>
            </ul> */}
            <div id="restInfoCard">
                <div id="ratingCost">
                    <ul>
                        <li>
                            <i className="fa-solid fa-star"></i>
                            {avgRating} &nbsp; ({totalRatingsString}) &nbsp;&nbsp; {costForTwoMessage}
                        </li>
                        <li>{cuisines.join(", ")}</li>
                    </ul>
                </div>
                <div id="place">
                    <ul>
                        <li>Outlet:{locality}</li>
                        <li>{sla.minDeliveryTime} -{sla.maxDeliveryTime} </li>
                    </ul>
                </div>
                <div id="delievery">
                    <ul>
                        {
                        feeDetails.message ?<li> <b>{feeDetails.message.replace(/<[^>]*>/g, "")} </b></li> :
                        <li><b> Restaurant Distance is not available. </b> </li>
                            
                }
                

                    </ul>
                </div>
            </div>


        </div>
    );
};

export default RestaurantMenu;
