import React, { useContext, useState } from "react";
import UserInfo from "../utils/UserInfoContext";

const Search = ({ lists, setSearchList }) => {
  const [searchText, setsearchText] = useState("");
  const SearchedList = () => {
    const filteredList = lists?.filter((restrant) =>
      restrant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    setSearchList(filteredList);
  };
  return (
    <div>
      <input
        data-testid="searchInp"
        value={searchText}
        onChange={(letter) => setsearchText(letter?.target?.value)}
        className="border-2 w-96 p-1 font-semibold rounded-md border-black mr-2 bg-blue-100"
        type="text"
      />
      <button
        onClick={SearchedList}
        className="p-1.5 cursor-pointer font-semibold bg-red-300 rounded-lg"
      >
        Discover
      </button>
    </div>
  );
};

export default Search;
