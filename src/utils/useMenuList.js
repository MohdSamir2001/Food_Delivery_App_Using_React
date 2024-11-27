import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

export const useMenuList = (resId) => {
  const [menuListInfo, setMenuListInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId + "&submitAction=ENTER");
    const json = await data.json();
    setMenuListInfo(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
  };
  return menuListInfo;
};
