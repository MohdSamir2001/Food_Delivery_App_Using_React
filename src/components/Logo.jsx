import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo w-12 h-12">
      <Link to="/">
        <img className="logoimage rounded-lg" src={LOGO_URL} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
