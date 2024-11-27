import React, { useEffect, useRef, useState } from "react";
import Card, { withPromotedCard } from "./Card";
import ShimmerEffect from "./ShimmerEffect";
import { REST_URL } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";
const RestaurantContainer = ({ setlists, SearchList, setSearchList }) => {
  useEffect(() => {
    fetchList();
  }, []);

  const PromotedCard = withPromotedCard(Card);

  const fetchList = async () => {
    const response = await fetch(REST_URL);
    const json = await response.json();
    const newData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setSearchList(newData);
    setlists(newData);
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return <h1>Check Your Network Connectivity</h1>;
  }

  return SearchList.length === 0 ? (
    <ShimmerEffect />
  ) : (
    <div className="flex gap-4 my-2 justify-center p-4 border-2 flex-wrap">
      {SearchList?.map((item, index) => {
        return item?.info?.veg ? (
          <PromotedCard key={index} resCard={item} />
        ) : (
          <Card key={index} resCard={item} />
        );
      })}
    </div>
  );
};

export default RestaurantContainer;
