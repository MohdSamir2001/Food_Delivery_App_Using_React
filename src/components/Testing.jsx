import React from "react";

const Testing = () => {
  return (
    <div>
      <h1 className="font-semibold my-4 text-2xl text-center">
        This is testing page
      </h1>
      <div className="my-5">
        <input
          className="font-semibold border-black p-1 border-2 rounded-sm"
          type="text"
          placeholder="name"
        />
        <input
          className="font-semibold ml-2 border-black p-1 border-2 rounded-sm"
          type="text"
          placeholder="message"
        />
        <button className="font-semibold bg-red-400 ml-2 text-white p-1 border-2 border-black rounded-sm">
          submit
        </button>
      </div>
    </div>
  );
};

export default Testing;
