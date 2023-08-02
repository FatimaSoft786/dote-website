import React from "react";
import profile from "../images/profile_pic.png";
import tick from "../images/blue_tick.png";
import right_arrow from "../images/right_icons.png";

const DashBoard = () => {
  return (
    <div className=" w-auto h-auto bg-[#FBFDFF]">
      <div className="font-bold text-[#141E3E] text-xl pt-11 ml-10 leading-none">
        Welcome Back! 👋
      </div>
      <div className=" font-regular text-[#141E3E]/75 text-ls leading-none ml-10 mt-1">
        18 March,2023
      </div>

      <div className=" py-5 mx-10 h-auto bg-white shadow border-white mt-10 rounded-3xl">
        <span className="my-5 mx-5 font-semibold text-xl leading-none">
          Upcoming birthdays
        </span>

        <div className=" grid grid-cols-4 w-auto">
          <div className="flex flex-row mb-5">
            <div className="mt-6 ml-5">
              <img className=" w-14 h-14 rounded-xl" src={profile} alt="" />
            </div>
            <div className=" flex flex-col ml-3 mt-7">
              <div className=" font-semibold text-base text-[#141E3E]">
                Shahzaib
              </div>

              <div className=" text-[#141E3E]/75 font-regular text-base">
                Today
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-row mx-10 my-5">
        <div className=" w-8/12 h-auto rounded-2xl bg-white shadow py-3">
          <span className="text-black font-semibold text-lg mx-5">
            Today’s Logged Activities
          </span>

          <div className=" border border-black rounded-xl flex flex-col justify-start mx-5 my-5">
            <span className=" font-semibold text-[#141E3E] text-4xl px-4 leading-none pt-4">
              39
            </span>

            <span className=" font-regular text-base text-[#141E3E] px-4 leading-none pb-5">
              Total Activities Today
            </span>
          </div>

          <div className=" mx-5 flex flex-row">
            <div className=" w-28 h-28 flex flex-col justify-center items-center rounded-full bg-[#3D70F3]/10">
              <span className=" font-semibold text-xl text-[#3D70F3] leading-none">
                12
              </span>
              <span className=" font-regular text-xs text-[#3D70F3] leading-none">
                Activities
              </span>
            </div>

            <div className=" flex flex-col">
              <span className=" font-semibold text-base text-[#141E3E] px-5">
                Blue Room
              </span>

              <div className=" flex flex-row px-5">
                <img className=" w-4 h-4 mt-1 mx-0" src={tick} alt="tick" />
                <span className=" font-regular text-xs text-[#141E3E]/50 mt-1">
                  All student’s have activities activities Logged
                </span>
              </div>

              <div className=" flex flex-row mt-3">
                <ul className=" flex flex-row">
                  <li className=" ml-5 mt-3">
                    <span className=" rounded-xl border border-black/10 px-3 py-2 font-regular text-sm">
                      4 Potty
                    </span>
                  </li>

                  <li className=" ml-5 mt-3">
                    <span className=" rounded-xl border border-black/10 px-3 py-2 font-regular text-sm">
                      4 Food
                    </span>
                  </li>
                </ul>

                <div className=" bg-primary/10 rounded-xl px-5 py-4 flex justify-end ml-5">
                  <span className=" text-primary font-semibold text-sm">
                    view details
                  </span>
                  <img
                    className="w-4 h-4 mt-1 ml-2"
                    src={right_arrow}
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/3 h-auto bg-white shadow mx-4 rounded-xl py-3 flex flex-col">
          <span className=" px-4 py-3 font-semibold text-xl text-[#141E3E]">
            Current Room Ratio
          </span>

          <div className="flex justify-between px-4">
            <div className=" flex justify-start">
              <span className=" items-start font-semibold text-xs text-[#141E3E]">
                All Rooms
              </span>
            </div>

            <div className=" flex justify-end space-x-2">
              <span className=" items-end px-4 font-semibold text-[#141E3E] text-xs leading-none py-0 ">
                20 Students
              </span>
              <span className="items-end px-4 font-semibold text-[#141E3E] text-xs leading-none py-0 ">
                4 Staff
              </span>
              <span className="items-end px-4 font-semibold text-[#141E3E] text-xs leading-none py-0 ">
                5:1
              </span>
            </div>
          </div>


    <div className=" w-auto h-0.5 rounded-xl bg-[#667080] mx-4 mt-2"> </div>

     <div className=" flex flex-row justify-between mt-3 px-4">

<div className=" justify-start">
    <span className=" rounded-lg bg-green/10 text-green font-semibold text-xs px-4 py-2">
        Green Room
    </span>

</div>


<div className=" flex justify-end space-x-2">
<span className="items-end px-2 font-regular text-[#141E3E]/75 text-xs leading-none border border-black/10 rounded-lg py-1">
                20 Students
              </span>
              <span className="items-end px-4 font-regular text-[#141E3E]/75 text-xs leading-none border border-black/10 rounded-lg py-1">
                4 Staff
              </span>

              <span className="items-end px-4 font-regular text-[#141E3E]/75 text-xs leading-none border border-black/10 rounded-lg py-1">
                5:1
              </span>
             
            </div>


     </div>


        </div>
      </div>
    </div>
  );
};

export default DashBoard;
