import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserInfo from "../utils/UserInfoContext";
import { useSelector } from "react-redux";
const NavItems = () => {
  const data = useContext(UserInfo);
  const [log, setlog] = useState("Log In");
  const OnlineStatuss = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="navitems items-center flex gap-12">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold opacity-70"></h3>
        <h3
          className={`${
            OnlineStatuss ? "bg-green-500" : "bg-red-600"
          } w-4 h-4 rounded-full`}
        ></h3>
      </div>
      <Link to="/contact">
        <h3 className="font-semibold opacity-70">Contact</h3>
      </Link>
      <Link to="/about">
        <h3 className="font-semibold opacity-70">About</h3>
      </Link>
      <Link to="/cart">
        <h3 className="font-semibold opacity-70">Cart : {cartItems.length}</h3>
      </Link>
      <Link to="/testing">
        <h3 className="font-semibold opacity-70">Testing</h3>
      </Link>
      <button
        onClick={() => {
          log === "Log In" ? setlog("Log Out") : setlog("Log In");
        }}
        className={`p-1.5 cursor-pointer rounded-lg font-semibold bg-blue-400 mr-8`}
      >
        {log}
      </button>
    </div>
  );
};
export default NavItems;
