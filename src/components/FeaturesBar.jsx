import React from "react";
import TopRating from "./TopRating";
import Search from "./Search";

const FeaturesBar = ({ lists, setSearchList, handleRatedClick }) => {
  return (
    <div className="featurebar justify-between my-2 items-center flex border-2  p-2">
      <Search lists={lists} setSearchList={setSearchList} />
      <TopRating handleRatedClick={handleRatedClick} />
    </div>
  );
};

export default FeaturesBar;
