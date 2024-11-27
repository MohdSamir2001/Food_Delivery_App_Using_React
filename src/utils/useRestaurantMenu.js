import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [menuCardInfo, setMenuCardInfo] = useState([]);
  // fetch the data
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId + "&submitAction=ENTER");
    const json = await data.json();
    setMenuCardInfo(json?.data?.cards[2]?.card?.card?.info);
  };
  return menuCardInfo;
};
