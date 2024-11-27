import RestaurantContainer from "./RestaurantContainer";
import React, { useState } from "react";
import FeaturesBar from "./FeaturesBar";
const Body = () => {
  const [lists, setlists] = useState([]);
  const [SearchList, setSearchList] = useState([]);
  const handleRatedClick = () => {
    setSearchList(lists?.filter((res) => res?.info?.avgRating > 4.6));
  };
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <FeaturesBar
          lists={lists}
          setlists={setlists}
          handleRatedClick={handleRatedClick}
          SearchList={SearchList}
          setSearchList={setSearchList}
        />
      </div>
      <RestaurantContainer
        SearchList={SearchList}
        setSearchList={setSearchList}
        lists={lists}
        setlists={setlists}
      />
    </div>
  );
};

export default Body;
