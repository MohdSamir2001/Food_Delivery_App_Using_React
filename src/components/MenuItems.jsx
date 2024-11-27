import React from "react";
import { Menu_List_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItems = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-full">
      {items?.itemCards?.map((item) => {
        const { id, imageId, name, price, defaultPrice, description } =
          item?.card?.info;

        return (
          <div
            data-testid="food-item"
            key={id}
            className="bg-blue-300 w-full justify-between flex rounded-lg p-1 my-2 py-2"
          >
            <div className="w-8/12 font-semibold">
              <h1 className="text-2xl">{name}</h1>
              <h2>Rs: {price / 100 || defaultPrice / 100}</h2>
              <h3>{description}</h3>
            </div>
            <div className="w-36 relative rounded-lg">
              <img
                className="w-full object-cover rounded-lg"
                src={Menu_List_URL + imageId}
                alt=""
              />
              <button
                onClick={() => handleAddItem(item)}
                className="p-2 w-16 text-center rounded-lg absolute -top-4 left-10 bg-black text-white font-semibold"
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
