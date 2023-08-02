import React from "react";
import due from "../images/due.png"

const CurrentActivity= () => {

return(

<div className=" w-full h-full">
    <div className=" mx-10 bg-white shadow-lg rounded-lg">

        <div className=" flex flex-row justify-between mx-4 py-2">
            <span className=" font-poppins font-bold text-lg text-black1">Current Account Balance</span>
            <span className="font-poppins font-semibold text-lg text-blue">$300.00</span>

        </div>
        <div className=" w-full h-0.5 bg-slate-300 my-2"></div>
        <div className=" flex flex-row justify-between mx-4 py-2">
            <div className=" flex justify-start space-x-2">
  <img className=" w-5 h-5" src={due} alt="Due"/>
  <span className=" font-poppins font-semibold text-sm text-black1">0 Past due invoices</span>
            </div>


  <span className=" font-poppins font-semibold text-xs text-black1">$0.00</span>
           
           

        </div>

    </div>

</div>

);


};
export default CurrentActivity;