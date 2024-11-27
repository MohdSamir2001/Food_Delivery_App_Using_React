import React, { useState } from "react";
const TopRating = ({ handleRatedClick }) => {
  return (
    <button
      data-testid="RatedButton"
      onClick={handleRatedClick}
      className="p-1.5 cursor-pointer font-semibold bg-red-300 rounded-lg"
    >
      Top Rated Restraunts
    </button>
  );
};

export default TopRating;
