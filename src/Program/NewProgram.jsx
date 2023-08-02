import React from "react";

const newProgram = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" flex flex-row px-10 pt-10">
        <span className=" font-poppins font-bold text-2xl py-4">
          New Program
        </span>
      </div>
      <div className=" border border-gray rounded-lg mx-10 px-4 py-4 flex flex-col">
        <div className=" mx-10 px-4 py-4 justify-between flex">
          <div className=" flex flex-col w-1/3">
            <span className=" font-poppins  font-semibold text-base text-black">
              Program Name
            </span>
            <input
              className=" border-b border-gray outline-none bg-transparent my-2"
              placeholder="Enter Program name"
            />
          </div>
          <div className=" flex flex-col w-1/3">
            <span className="font-poppins  font-semibold text-base text-black">
              Description
            </span>
            <input
              className=" border-b border-gray outline-none bg-transparent my-2"
              placeholder="Description"
            />
          </div>
        </div>
        <div className=" mx-10 px-4 py-4 justify-between flex">
          <div className=" flex flex-col w-1/3">
            <span className="font-poppins  font-semibold text-base text-black">
              Min Age
            </span>
            <input
              className=" border-b border-gray outline-none bg-transparent my-2"
              placeholder="6 yrs"
            />
          </div>
          <div className=" flex flex-col w-1/3">
            <span className="font-poppins  font-semibold text-base text-black">
              Max Age
            </span>
            <input
              className=" border-b border-gray outline-none bg-transparent my-2"
              placeholder="18 yrs"
            />
          </div>
        </div>
        <div className=" mx-10 px-4 py-4 justify-between flex">
          <div className=" flex flex-col w-1/3">
            <span className="font-poppins  font-semibold text-base text-black">
              Start date
            </span>
            <input
              className=" border-b border-gray outline-none bg-transparent my-2"
              placeholder="12/12/2022"
            />
          </div>
          <div className=" flex flex-col w-1/3">
            <span className="font-poppins  font-semibold text-base text-black">
              End date
            </span>
            <input
              className=" border-b border-gray outline-none bg-transparent my-2"
              placeholder="12/01/2023"
            />
          </div>
        </div>
        <div className=" mx-10 px-4 py-4 justify-between flex">
          <div className=" flex flex-col w-1/3">
            <span className="font-poppins  font-semibold text-base text-black">
              Max Capacity
            </span>
            <input
              className=" border-b border-gray outline-none bg-transparent my-2"
              placeholder="12"
            />
          </div>
        </div>
        <div className=" flex flex-row justify-end mx-10">
          <button>Save Program</button>
        </div>
      </div>
    </div>
  );
};
export default newProgram;
