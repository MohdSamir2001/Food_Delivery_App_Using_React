import React, { useContext } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { resCard } = props;
  const {
    name,
    avgRating,
    id,
    cuisines,
    areaName,
    locality,
    cloudinaryImageId,
  } = resCard?.info;
  return (
    <>
      <div data-testid="resCard">
        <Link to={"/restaurant/" + id}>
          <div className="card hover:border-2 border-black p-2 opacity-90 hover:scale-105 transition-transform duration-300 cursor-pointer w-56 h-80 flex flex-col overflow-hidden rounded-lg bg-blue-100 ">
            <img
              className="h-40 w-full rounded-lg object-cover object-center"
              src={IMG_CDN_URL + cloudinaryImageId}
              alt=""
            />
            <div className="">
              <h4 className='text-xl font-semibold font-["plain_light"] '>
                {name}
              </h4>
              <h5 className="font-semibold line-clamp-1">
                {cuisines.join(",")}
              </h5>
              <h5 className="font-semibold line-clamp-1">{avgRating}</h5>
              <h5 className="font-semibold line-clamp-1">{areaName}</h5>
              <h5 className="font-semibold line-clamp-1">{locality}</h5>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export const withPromotedCard = (Card) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black z-10 font-semibold px-2 rounded-lg text-white">
          Veg
        </label>
        <Card {...props} />
      </div>
    );
  };
};
export default Card;
