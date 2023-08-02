import React from "react";

const Account = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" flex flex-row px-10 pt-10">
        <span className=" font-poppins font-bold text-2xl">Billing Plans</span>
      </div>

      <div className=" mx-10 mt-10 bg-white shadow-lg rounded-lg">
        <table className=" table-auto">
          <thead>
            <tr>
              <th className="font-poppins font-medium text-sm text-black1/75 px-5 py-5 border-b border-gray-200">
                Invoice
              </th>
              <th className="font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Name
              </th>
              <th className="font-poppins font-medium text-sm text-black1/75 px-32 py-5 border-b border-gray-200">
                Payment due
              </th>
              <th className="font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Payment status
              </th>
              <th className=" w-full font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" px-4 py-4">
              <span className=" font-poppins font-light text-xs px-4 py-4 text-blue">inv#3223</span>
              </td>

              <td className=" pl-20 py-4">
              <span className=" font-poppins font-light text-xs  py-4 text-black">Weekly Toddler Tuition </span>
              </td>

              <td className=" px-20 py-4">
              <span className=" font-poppins font-light text-xs px-20 py-4 text-primary">8/16/2022</span>
              </td>

              <td className=" px-20 py-4">
              <span className=" font-poppins font-semibold rounded-lg text-xs px-4 py-2 bg-primary/10 text-primary">unpaid</span>
              </td>

              <td className=" px-20 py-4 flex justify-center">
              <span className=" font-poppins font-medium rounded-lg text-base px-4  py-4  text-black1/75 w-full items-center text-center">350 kwd</span>
              </td>

            </tr>
          </tbody>
        </table>
      </div>

  <div className=" mx-10 my-5 flex flex-col">
    <span className=" font-poppins font-bold text-xl text-black1">Payer</span>
    <span className=" font-poppins font-semibold text-xs text-black1/75">Active Payers will be shown in here</span>
  </div>

  <div className=" mx-10 mt-10 bg-white shadow-lg rounded-lg">
        <table className=" table-auto">
          <thead>
            <tr>
              <th className="font-poppins font-medium text-sm text-black1/75 px-5 py-5 border-b border-gray-200">
                Invoice
              </th>
              <th className="font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Type
              </th>
              
              <th className="font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Payment status
              </th>
              <th className=" w-80 font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">
                Amount
              </th>
              <th className=" w-full font-poppins font-medium text-sm text-black1/75 px-20 py-5 border-b border-gray-200">

              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" px-0 py-4 flex justify-center">
              <span className=" font-poppins font-light text-xs px-4 py-4 text-blue text-center">Ahmed ali</span>
              </td>

              <td className=" pl-20 py-4">
              <span className=" font-poppins font-light text-xs  py-4 text-black">Parent</span>
              </td>


              <td className=" px-20 py-4">
              <span className=" font-poppins font-semibold rounded-lg text-xs px-4 py-2 bg-primary/10 text-primary">unpaid</span>
              </td>

              <td className=" w-80 px-20 py-4 flex justify-center">
              <span className=" font-poppins font-medium rounded-lg text-base px-4  py-4  text-black1/75 w-full items-center text-center">350 kwd</span>
              </td>


              <td className=" px-20 py-4">
              <span className=" font-poppins font-semibold rounded-lg text-xs px-4 py-2 bg-blue/10 text-blue">Reminder</span>
              </td>

            </tr>
          </tbody>
        </table>
      </div>


    </div>
  );
};
export default Account;
