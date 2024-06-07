import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
    console.log("data--->", data);
  const handleClick = () => {
    console.log("clicked");
    setShowIndex()
  };
  return (
    <>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-xl font-bold">
            {" "}
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span> {showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />
  }
      </div>
    </>
  );
};

export default RestaurantCategory;
