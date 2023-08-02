import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import profile from "../images/profile_pic.png";
import edit from "../images/edit.png";
import child from "../images/child.png";

const ChildFeed = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" flex flex-row justify-start">
        <div className="flex items-center mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="From Date"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
          <FaCalendarAlt className="h-5 w-5 text-black ml-2" />
        </div>

        <div className="flex items-center mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="End date"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
          <FaCalendarAlt className="h-5 w-5 text-black1 ml-2" />
        </div>

        <button className="font-poppins font-medium text-base leading-none bg-transparent text-primary border border-primary rounded-lg h-10 my-5 px-10">
          Apply
        </button>
      </div>

      <div className=" flex flex-row">
        <div className=" w-1/2 h-auto bg-white rounded-lg mx-5">
          <div className=" flex flex-row">
            <div className=" w-1/2 flex h-auto flex-row ">
              <img
                className=" w-20 h-20 rounded-full mx-5 mt-5"
                src={profile}
                alt="profile"
              />
              <div className=" flex flex-col my-8">
                <span className=" font-poppins font-semibold text-base text-black1">
                  Husaain
                </span>
                <span className=" font-poppins font-medium text-xs text-black1/75">
                  1 day ago | Purple room
                </span>
              </div>
            </div>

            <div className=" w-1/2 flex  justify-end">
              <img
                className=" mt-10 mx-5 w-5 h-5 items-end"
                src={edit}
                alt="Edit"
              />
            </div>
          </div>
          <span className=" font-poppins font-regular text-sm mx-5 leading-none">
            Alex was very excited and happy today, He played in the playground.
          </span>

      <img className=" w-full h-auto px-2 py-3" src={child} alt="child"/>

      <div className=" flex flex-row justify-end">

        <button className=" mb-5 mx-3 px-3 py-2 font-poppins font-semibold text-sm leading-none">Daily report</button>

      </div>

        </div>
      </div>
    </div>
  );
};

export default ChildFeed;
