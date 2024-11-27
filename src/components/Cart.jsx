import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu_List_URL } from "../utils/constants";
import { removeItem, clearCart } from "../utils/cartSlice";
const Cart = () => {
  const addedCartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const removeAddedItem = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const clearAllItems = () => {
    dispatch(clearCart());
  };
  if (addedCartItems.length === 0)
    return (
      <h1 className="px-2 py-1 w-18 cursor-pointer text-center rounded-lg  bg-black text-white font-semibold">
        Guys Please Add Items
      </h1>
    );
  return (
    <div className="w-8/12 relative mt-8 rounded-lg mx-auto border-2 px-4">
      <h1 className="font-semibold text-center mb-4 text-3xl">
        ----- Cart -----
      </h1>
      <button
        onClick={clearAllItems}
        className="px-2 py-1 w-18 cursor-pointer text-center rounded-lg absolute -top-5 -right-10 bg-black text-white font-semibold"
      >
        Clear Cart
      </button>
      {addedCartItems.map((item) => {
        const { imageId, defaultPrice, id, price, description, name } =
          item.card.info;
        return (
          <div className="border-b-2 border-gray-400 w-full justify-between flex p-1 my-4 py-2">
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
              <h1
                onClick={() => removeAddedItem(id)}
                className="p-2 w-18 cursor-pointer text-center rounded-lg absolute -top-4 left-9 bg-black text-white font-semibold"
              >
                Remove
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
