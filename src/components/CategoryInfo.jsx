import React, { useState } from "react";
import MenuItems from "./MenuItems";

const CategoryInfo = ({ data, setshowIndex, show }) => {
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div className="transition-all">
      <div
        onClick={handleClick}
        className="w-full p-2 cursor-pointer bg-gray-200 mb-2 border-b-2 border-gray-400"
      >
        <div className="flex justify-between">
          <div className="font-semibold mb-1">
            {data.title} ({data.itemCards.length})
          </div>
          <div>⬇️</div>
        </div>
        {show ? <MenuItems items={data} /> : ""}
      </div>
    </div>
  );
};
export default CategoryInfo;
