import React from "react";
import { HiSearch } from "react-icons/hi";

const Library = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" flex flex-row px-10 pt-10">
        <span className=" font-poppins font-bold text-2xl">
          Billing Library
        </span>
      </div>

      <div className=" px-10 py-5 flex flex-row">
        <div className="relative text-black1 w-1/2">
          <input
            className=" w-96 h-10 py-2 pr-10 pl-4 rounded-lg border border-black1/75 focus:border-blue-500 focus:outline-none bg-transparent font-poppins font-medium text-xs"
            type="search"
            placeholder="Type category or description"
          />
          {/* <span className="absolute top-0 right-0 px-3 py-2">
        <HiSearch />
      </span> */}
        </div>

        <div className=" w-1/2 flex justify-end">
          <button className=" items-end">Create a new charge</button>
        </div>
      </div>

      <span className=" font-poppins font-semibold text-lg text-black1 px-10">
        Add New Students
      </span>

      <table className=" font-poppins mx-10">
        <thead className=" font-poppins font-semibold text-xs">
          <tr>
            <th className=" py-3 pr-20 text-black1/75">Date added</th>
            <th className=" pr-20 pl-24 text-black1/75">Category</th>
            <th className="pr-20 pl-20 text-black1/75">Description</th>
            <th className="pr-20 pl-20 text-black1/75">Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
                <span className=" font-poppins font-semibold text-base">12/04/2023</span>
            </td>
            <td>
                <span className="font-poppins font-semibold text-base pl-20">Circulum vitae</span>
            </td>
            <td>
                <span className="font-poppins font-semibold text-base pl-20">Infant 5-day</span>
            </td>
            <td>
                <span className="font-poppins font-semibold text-base pl-20">$100.00</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Library;
