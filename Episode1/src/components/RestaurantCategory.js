import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItemList, setShowItemList] = useState(false);
  console.log("data--->", data);
  const handleClick = () => {
    console.log("clicked");
    setShowItemList(!showItemList);
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
          <span> {showItemList ? "⬆️" : "⬇️"}</span>
        </div>
        {/* Accordion Body */}
        {showItemList && (
          <ItemList items={data.itemCards} />
        ) }
      </div>
    </>
  );
};

export default RestaurantCategory;
