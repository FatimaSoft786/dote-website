import React from "react";

import { AiOutlineRight } from "react-icons/ai";

const Waitlist = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" mx-10 flex justify-between">
        <span className=" my-10 font-poppins font-bold text-xl text-black">
          Waitlists
        </span>
        <button className=" h-10 my-10">Add student</button>
      </div>

      <div className=" w-52 h-14 bg-primary/10 rounded-lg border-black1 mx-10 flex flex-row justify-between">
        <div className=" flex flex-col">
          <span className=" font-poppins font-semibold text-base text-primary px-3 pt-2">
            Toddlers
          </span>
          <span className=" font-poppins font-medium text-xs text-primary px-3">
            2 Students
          </span>
        </div>

        <div className=" justify-center">
          <AiOutlineRight className="h-full w-5 text-primary mr-2 pt-1 items-center" />
        </div>
      </div>

  <div className=" mx-10 my-5">
  <span className="font-poppins font-semibold text-xl text-black1">Infants</span>
  </div>

  <div className=" mx-10 flex flex-row justify-start">

  <div className="flex items-center w-80 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Search Here"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

        <div className="flex items-center w-60 mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Room"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

        <div className="flex items-center w-60 mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Sibling"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

        <div className="flex items-center w-60 mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Min Age"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

        <div className="flex items-center w-60 mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Max Age"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>
 

  </div>

    </div>
  );
};
export default Waitlist;
