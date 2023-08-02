import React from "react";
import Invoice from "../images/invoice.png";

const Upcoming = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" flex flex-row px-10 pt-10">
        <span className=" font-poppins font-bold text-2xl">
          New upcoming invoice to post
        </span>
      </div>

      <div className=" h-auto rounded-lg shadow-l mx-10 my-10 bg-white">
        <div className=" flex flex-row h-auto">
          <div className=" w-1/2  flex flex-row ">
            <img className=" w-14 h-14 mx-5 my-5" src={Invoice} alt="Profile" />

            <div className=" flex flex-col mx-3 my-5">
              <span>Invoice#3535</span>
              <span>Monthly tution</span>
            </div>
          </div>

          <div className=" w-1/2 flex justify-end">
            <button className=" items-end h-10 mx-4 mt-6">Edit invoices</button>
          </div>

          <div></div>
        </div>

        <table className=" font-poppins mx-10 table-auto bg-white">

<thead>
    <tr>
    <th  className=" px-0">Type</th>
    <th  className=" px-20">Description</th>
    <th  className=" px-20"> Notes</th>
    <th className=" px-96">Amount</th>
    </tr>
</thead>

<tbody>
 
   <tr>
    <td>
       
        <span className=" font-poppins font-semibold text-base">12/04/2023</span>
       
        </td>

        <td>
            <span className=" font-poppins font-semibold text-base px-20">12/04/2023</span>
        </td>

        <td>
            <span className=" font-poppins font-semibold text-base px-20">12/04/2023</span>
        </td>

        <td>
            <span className=" font-poppins font-semibold text-base px-96">12/04/2023</span>
        </td>
    </tr>
 
</tbody>

</table>


<div className=" flex flex-row">

    <div className=" w-1/2">
<span className=" mx-10">Pending changes do not affect the account balance</span>
    </div>

    <div className=" w-1/2 flex justify-end">
        <span className=" items-end mx-4">Total pending changes:$250.00</span>

    </div>

</div>

      </div>

 

    </div>
  );
};

export default Upcoming;
