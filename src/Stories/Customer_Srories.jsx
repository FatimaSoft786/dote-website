import React from "react";
import Profile from "../images/profile.png";

const Stories = () => {
  return (
    <div className=" w-full h-auto">
      <div className="flex flex-col items-center justify-center h-auto mt-9">
        <label className=" font-extrabold text-6xl text-black text-center w-1/2">
          Dote is adored by millions of teachers and families.
        </label>

        <label className="text-[#141E3E] text-sm text-center w-1/3">
          Discover how dote enables you to manage your daycare programme
          effectively, streamline billing, and create relationships all in one
          spot.
        </label>

        <div className="w-1/3 h-auto border border-white shadow-lg shadow-rose-300 items-center rounded-lg mt-10">
          <div className="flex flex-row">
            <div className=" w-3/4 h-full flex flex-col justify-start">
              <h1 className="font-bold text-[#07003B] ml-7 text-2xl">
                Hussain
              </h1>
              <p className="text-[#515E81] font-regular text-sm ml-7">
                CEO at Company
              </p>
              <p className="text-[#111231] font-semibold text-sm ml-7 mt-5">
                “We chose Dote when we were evaluating different tools because
                it integrates billing, admissions, and a great visual experience
                for families.”
              </p>
            </div>

            <div className=" w-1/4h-auto">
              <img className=" w-20 h-20" src={Profile} alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-auto py-2">
          <button className="w-80 h-10 pt-1">Watch the story</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
