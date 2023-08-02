import React from "react";
import profile from "../images/profile_pic.png";
import registration from "../images/registration.png";
const RegistrationForm = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" flex flex-row justify-between">
        <div className=" flex flex-col">
          <span>Review Submission</span>
          <span>Registration Form</span>
        </div>

        <div className=" flex flex-row">
          <div>
            <img className=" w-5 h-5 rounded-full" src={profile} alt="" />
          </div>

          <div className=" flex flex-col">
            <span>Review Submission</span>
            <span>Registration Form</span>
          </div>
        </div>
      </div>

      <div className=" flex flex-row">
        <div className=" w-1/2 h-auto">
          <img className="" src={registration} />
        </div>

        <div className=" w-1/2 h-auto mt-10">
          <div className=" flex flex-row">
            <span className=" w-10 h-10 rounded-full bg-blue/10 text-blue font-poppins font-bold text-base text-center py-2">
              1
            </span>
            <span className=" font-poppins font-semibold text-base text-black mx-5 mt-2">
              Child Information
            </span>
            <div className=" w-80 h-0.5 bg-blue mt-5"></div>
          </div>

       <div className=" flex flex-row">
       <div className="flex items-center w-80 mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Full name"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

        <div className="flex items-center w-80  mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Gender"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

       </div>

       <div className=" flex flex-row">
       <div className="flex items-center w-80 mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

        <div className="flex items-center w-80  mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Allergies"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

       </div>

       <div className=" flex flex-row">
       <div className="flex items-center w-80 mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Doctor name"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

        <div className="flex items-center w-80  mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="(000)00000"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
        </div>

       </div>

        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
