import React from "react";
import profile from "../images/profile_pic.png";
const RoomList = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" mx-20 py-5">
        <span className="font-poppins font-bold text-black1 text-2xl">
          Room List
        </span>
      </div>

      <div className=" flex justify-end items-end mx-20">
        <button className=" items-end font-poppins font-medium text-base px-4 py-1">
          New Room
        </button>
      </div>

      <div className=" mx-20 bg-white h-auto my-5">
        <div className=" flex justify-end space-x-5 px-5">
          <div className=" items-end">
            <span className=" font-poppins text-sm font-regular text-black1">
              Total Student:
            </span>
            <span className=" font-poppins font-semibold text-black1 text-sm">
              54
            </span>
          </div>

          <div className=" items-end">
            <span className=" font-poppins text-sm font-regular text-black1">
              Total Rooms:
            </span>
            <span className=" font-poppins font-semibold text-black1 text-sm">
              3
            </span>
          </div>
        </div>

        <div className="border-black1/10 border-2 border-solid">
          <div className=" flex flex-row px-5 py-5 justify-between">

      <div className=" flex flex-row">
      <span className=" rounded-lg bg-green/10 text-green font-semibold text-xs px-4 py-2">
              Green Room
            </span>

            <ul className=" flex flex-row mx-5">
              <li>
                <img
                  className=" w-8 h-8 mx-0 rounded-full"
                  src={profile}
                  alt="Profile"
                />
              </li>

              <li>
                <img
                  className=" w-8 h-8 mx-0 rounded-full"
                  src={profile}
                  alt="Profile"
                />
              </li>

              <li>
                <img
                  className=" w-8 h-8 mx-0 rounded-full"
                  src={profile}
                  alt="Profile"
                />
              </li>
              <li>
                <span className=" font-poppins font-regular text-xs text-black1/75 mx-4">& 18 other students</span>
              </li>
            </ul>
      </div>

            <div className=" flex flex-row justify-end">
            <span className=" font-poppins font-medium text-sm leading-none text-black1/75 mt-1 items-end">Total Students:22</span>

          </div>

          </div>
         
        </div>
      </div>
    </div>
  );
};

export default RoomList;
