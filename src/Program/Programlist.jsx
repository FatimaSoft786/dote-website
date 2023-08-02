import React from "react";

const ProgramList = () => {

return(

    <div className=" w-full h-full bg-slate-100">
   <div className=" mx-10 flex justify-between">
    <span className=" my-10 font-poppins font-bold text-xl text-black">Program</span>
    <button className=" h-10 my-10">New Program</button>
   </div>

  <div className=" mx-10 shadow-lg bg-white rounded-lg">
  <div className=" mx-10">
  <table className=" w-full">
    <thead>
        <tr>
            <th className=" py-2">Program name</th>
            <th>Description</th>
            <th>Max Capacity</th>
            <th>Min/Max Age</th>
            <th>Start Date</th>
            <th>End Date</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td className="text-center h-0.5 py-4 ">Shahzaib</td>
        </tr>
    </tbody>
   </table>
  </div>

  </div>

    </div>


);

//border-t border-[#000] for line above to the table row

};
export default ProgramList;