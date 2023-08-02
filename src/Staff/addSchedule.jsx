import React from "react";

const addSchedule = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" mx-20">
        <div className="py-5">
          <span className="font-poppins font-bold text-black1 text-2xl">
            Add staff to schedule
          </span>
        </div>

        <div className=" flex flex-col">
          <span className=" font-poppins font-bold text-base text-black1">
            Schedule Type
          </span>
          <div className=" flex flex-row justify-start space-x-5">
            <button className=" px-4">Work Shift</button>
            <button className=" px-4">PTO</button>
            <button className="px-4">Sick</button>
          </div>
        </div>

        <div className=" mt-5">
          <span className=" font-poppins font-bold text-base text-black1">
            Add Staff*
          </span>
        </div>

        <div className=" flex flex-col">
          <span className=" font-poppins font-bold text-base text-black1">
            Room
          </span>
          <input
            className="border-b border-gray-500 focus:outline-none focus:border-blue-500 w-40 bg-transparent"
            type="text"
            placeholder="Child room name"
          />

          <label className="inline-flex items-center mt-5">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 checked:bg-primary unchecked:bg-gray-400"
            />
            <span className="ml-2 text-primary font-semibold text-xs font-poppins leading-none">
              Repeat Every weeek
            </span>
          </label>

          <div className=" flex flex-row">
            <div className=" flex flex-col">
              <span className=" font-poppins font-bold text-base leading-none text-black1 my-5">
                Start date
              </span>
              <input
                className="border-b border-gray-500 focus:outline-none focus:border-blue-500 w-20 bg-transparent"
                type="text"
                placeholder="12/12/2023x"
              />
            </div>

            <div className=" flex flex-col">
              <span className=" font-poppins font-bold text-base leading-none text-black1 my-5 px-5">
                to
              </span>
              <span className=" font-poppins font-bold text-base leading-none text-black1 my-2 px-5">
                to
              </span>
            </div>

            <div className=" flex flex-col">
              <span className=" font-poppins font-bold text-base leading-none text-black1 my-5">
                Start date
              </span>
              <input
                className="border-b border-gray-500 focus:outline-none focus:border-blue-500 w-20 bg-transparent"
                type="text"
                placeholder="12/12/2023x"
              />
            </div>
          </div>

   <div className=" flex flex-col">
<span className=" font-poppins font-bold text-base text-black1 leading-none mt-7">Days of the week</span>
<div className=" flex flex-row">
  <button className=" px-10">Mon</button>
  <button className=" px-10">Tue</button>
  <button className=" px-10">Wed</button>
  <button className=" px-10">Thu</button>
  <button className=" px-10">Fri</button>
  <button className=" px-10">Sat</button>
  <button className=" px-10">Sun</button>
</div>
   </div>

   <div className=" flex flex-col mt-10">
    <span className=" font-poppins font-bold text-base text-black1">Description</span>

   <div className="border border-black w-96 h-40 mt-2 bg-transparent rounded-lg">
   {/* <input className=" outline-none w-full h-auto mul bg-transparent px-2 py-2" placeholder="Description"/> */}
   <textarea placeholder="Multi-line input" className=" w-full h-full outline-none px-2 py-2 bg-transparent"></textarea>
   </div>

   </div>

   <div className=" flex flex-row space-x-5">
    <button>Save Schedule</button>
    <span className=" mt-4 text-primary">Discard</span>
   </div>

        </div>
      </div>
    </div>
  );
};
export default addSchedule;
