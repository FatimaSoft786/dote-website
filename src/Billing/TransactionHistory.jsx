import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Transaction = () => {

    return(

        <div className=" w-full h-full bg-slate-100">
             <div className=" flex flex-row px-10 pt-10">
        <span className=" font-poppins font-bold text-2xl">All transactions history</span>
      </div>

      <div className=" flex flex-row justify-start px-10">
        <div className="flex items-center mx-0 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
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

  

      <div className=" mx-10 mt-10 bg-white shadow-lg rounded-lg">
        <table className=" table-auto">
          <thead>
            <tr>
              <th className="font-poppins font-medium text-sm text-black1/75 px-5 py-5 border-b border-gray-200">
                Name
              </th>
              <th className="font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Charges
              </th>
              
              <th className="font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Payment due
              </th>
              <th className=" w-80 font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Payment status
              </th>
              <th className=" font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Amount
              </th>
              <th className=" font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Balance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" px-0 py-4 flex justify-center">
              <span className=" font-poppins font-light text-xs px-4 py-4 text-blue text-center">Inv #3355</span>
              </td>


              <td className=" pl-20 py-4">
              <span className=" font-poppins font-light text-xs  py-4 text-black">Meals, Tuition</span>
              </td>

              <td className=" pl-20 py-4">
              <span className=" font-poppins font-light text-xs  py-4 text-black">8/16/2022</span>
              </td>



              <td className=" px-28 py-4">
              <span className=" font-poppins font-semibold rounded-lg text-xs px-4 py-2 bg-primary/10 text-primary">unpaid</span>
              </td>

              <td className=" w-80 px-20 py-4 flex justify-center">
              <span className=" font-poppins font-medium rounded-lg text-base px-4  py-4  text-black1/75 w-full items-center text-center">350 kwd</span>
              </td>


              <td className=" px-20 py-4">
              <span className=" font-poppins font-semibold rounded-lg text-xs px-4 py-2 bg-blue/10 text-blue">80 kwd</span>
              </td>

              <td className=" px-10 py-4">
              <span className=" font-poppins font-semibold rounded-lg text-xs px-4 py-2 text-blue">Action</span>
              </td>

            </tr>
          </tbody>
        </table>
      </div>


        </div>
    );


};
export default Transaction; 