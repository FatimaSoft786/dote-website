import React from "react";

const DailyReport = () => {
  return (
    <div className="w-full h-full bg-slate-100">
      <div className=" flex flex-row justify-between">
        <span className=" font-poppins font-bold text-2xl text-black1 mx-10 my-10">
          Daily Report
        </span>

        <span className=" font-poppins font-semibold text-sm text-primary my-10 mx-10">
          Help center
        </span>
      </div>

  <div className=" w-1/2 h-80 bg-white shadow rounded-lg mx-10 mt-10 px-3 py-3">
    <input placeholder="Enter child remarks here" className="focus: outline-none font-poppins font-light text-base">
    </input>
  </div>

  <div className=" w-1/2 flex flex-row justify-end space-x-2">
  <button className=" font-poppins font-bold text-base px-5 py-2 items-end bg-transparent text-primary">Discard</button>
    <button className=" font-poppins font-bold text-base px-5 py-2 items-end">Save Daily Report</button>

  
  </div>


    </div>
  );
};

export default DailyReport;
