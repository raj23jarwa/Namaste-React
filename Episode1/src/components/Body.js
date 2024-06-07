import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_URL);
      const data = await response.json();
      console.log(data);
      let restData =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(restData);

      setListOfRestaurant(restData); // Assuming data is an array of restaurants
      setFilteredRestaurant(restData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleSearch = () => {
    const filterrestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(input.toLowerCase())
    );
    console.log(filterrestaurant);
    setFilteredRestaurant(filterrestaurant);
  };

  const handleFilterTopRated = () => {
    const filteredData = listOfRestaurant.filter(
      (res) => res.info.avgRating > 4.1
    );

    console.log(filteredData);
    setFilteredRestaurant(filteredData);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="offlinemsg">
        {" "}
        Looks like you're offline.Please check your internet connection !!
      </h1>
    );

  return listOfRestaurant === null ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter flex w-full justify-center items-center py-8 gap-8">
        <div className="search flex gap-4">
          <input
            type="text"
            placeholder="Search your restaurant..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-500"
          />
          <button
            onClick={handleSearch}
            className="bg-green-700 text-white px-3 py-2 rounded-sm"
          >
            Search
          </button>
        </div>
        <button
          className="filterBtn bg-pink-500 text-white px-4 py-2"
          onClick={handleFilterTopRated}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resContainer grid grid-cols-5 px-10 gap-2">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
            
          >
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
