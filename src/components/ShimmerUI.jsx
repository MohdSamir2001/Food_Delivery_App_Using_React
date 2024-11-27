import React from "react";

const ShimmerUI = () => {
  return (
    <div className="card hover:border-2 border-black p-2 opacity-90 hover:scale-105 transition-transform duration-300 cursor-pointer w-56 h-80 flex flex-col overflow-hidden rounded-lg bg-slate-400 ">
      <div className="h-40 w-full rounded-lg bg-slate-300 object-cover object-center"></div>
      <div className="">
        <h4 className='text-xl w-52 h-8 rounded-lg mt-2 bg-slate-300 font-semibold font-["plain_light"] '>
          {" "}
        </h4>
        <h5 className="font-semibold w-52 h-6 rounded-lg mt-2 bg-slate-300"></h5>
        <h5 className="font-semibold w-52 h-6 rounded-lg mt-2 bg-slate-300"></h5>
        <h5 className="font-semibold w-52 h-6 rounded-lg mt-2 bg-slate-300"></h5>
        <h5 className="font-semibold w-52 h-6 rounded-lg mt-2 bg-slate-300"></h5>
      </div>
    </div>
  );
};

export default ShimmerUI;
