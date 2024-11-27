import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { useMenuList } from "../utils/useMenuList";
import AboutRestaurant from "./AboutRestaurant";
import CategoryInfo from "./CategoryInfo";
const RestaurantMenuContainer = () => {
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu(resId);
  const menuList = useMenuList(resId);
  const [showIndex, setshowIndex] = useState();
  const itemCategory = menuList?.cards?.filter((item) => {
    return (
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  return (
    <div className="w-full">
      <div className="w-8/12 my-4 border-2 border-gray-400 rounded-lg bg-gray-200 mx-auto ">
        <AboutRestaurant aboutRes={menuInfo} />
      </div>
      <h1 className="w-8/12 my-4 font-semibold text-2xl text-center overflow-hidden border-gray-400 mx-auto">
        ------MENU-----
      </h1>
      <div className="w-8/12 overflow-hidden border-gray-400 mx-auto">
        {itemCategory?.map((category, index) => {
          return (
            <div key={category.card.card.title}>
              <CategoryInfo
                data={category.card.card}
                show={index == showIndex}
                setshowIndex={() => setshowIndex(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenuContainer;
