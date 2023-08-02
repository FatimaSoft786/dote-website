import React from "react";
import profile from "../images/profile_pic.png";
import {MdOutlineArrowDropDown} from "react-icons/md"

const ParentList = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
   
   <div className=" px-8 py-5">
    <span className=" font-poppins font-bold text-2xl text-black1 px-8 my-8">Parent List</span>
   </div>

   <div className=" flex flex-row justify-start px-10">
        <div className="flex items-center mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Parent's name"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
          <MdOutlineArrowDropDown className="h-5 w-5 text-black ml-2" />
        </div>

        <div className="flex items-center mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Select Room"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
          <MdOutlineArrowDropDown className="h-5 w-5 text-black1 ml-2" />
        </div>

        <div className="flex items-center mx-5 my-5 rounded-md border border-gray-300 px-4 py-2 focus:outline-none hover:border-primary">
          <input
            type="text"
            placeholder="Select Status"
            className="focus: outline-none text-black1 placeholder:text-black1 font-poppins font-medium text-xs bg-transparent"
          />
          <MdOutlineArrowDropDown className="h-5 w-5 text-black1 ml-2" />
        </div>


        <button className="font-poppins font-medium text-base leading-none bg-transparent text-primary border border-primary rounded-lg h-10 my-5 px-10">
          Apply
        </button>
      </div>

      <div className=" hidden md:block">
        <div className=" w-full h-auto flex flex-row mx-5 px-10 my-2 space-x-1">
          <span className="text-black1 font-poppins font-medium text-sm"> Print Invitations</span>
          
          <span className=" text-primary font-poppins font-medium text-sm leading-none mt-1 px-4">
          View Guide
          </span>
          <span className=" text-primary font-poppins font-medium text-sm leading-none mt-1 px-4">
            Watch Video
          </span>
        </div>
        </div>




      <div className=" flex justify-start h-auto py-10">
     
        <table className=" font-poppins mx-14">
      
          <thead className=" font-poppins font-semibold text-xs">
            <tr>
              <th className=" py-3">STUDENTS</th>
              <th className="">PARENTS</th>
              <th className=" pl-0">SIGNED UP</th>
              <th className=" pl-0">BILLL PAY</th>
              <th className=" pl-0">AUTO PAY</th>
              <th className=" pl-0">CHECK-IN CODE</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className=" border-black1/10 border-2 border-solid">
                <div className=" flex flex-row px-2 py-4">
                  <img
                    className=" w-8 h-8 rounded-full"
                    src={profile}
                    alt="Profile"
                  />
                  <div className=" flex flex-col mx-2 h-auto">
                    <span className=" font-poppins font-semibold text-sm text-black1 leading-none">
                      Maryam
                    </span>
                    <span className=" font-poppins font-medium text-black1/75 leading-none text-xs my-1">
                      Nap Room | Red Room | Music Room | Afterschool
                    </span>
                  </div>
                </div>
              </td>


              <td className="border-black1/10 border-2 border-solid ">
                <div className=" flex flex-row px-2 py-4">
                  <img
                    className=" w-8 h-8 rounded-full"
                    src={profile}
                    alt="Profile"
                  />
                   <span className=" mx-2 my-2 font-poppins font-semibold text-sm text-black1 leading-none">
                      Rashid
                    </span>
                  
                </div>
              </td>

   <td className="border-black1/10 border-2 border-solid">
    <span className=" font-poppins font-medium text-xs text-black1 px-2" >Signed Up</span>
   </td>

   <td className="border-black1/10 border-2 border-solid px-4">
    <button className=" px-10">Invite</button>
   </td>

   <td className="border-black1/10 border-2 border-solid px-4">
   <button className=" px-10">Invite</button>
   </td>

   <td className="border-black1/10 border-2 border-solid px-4">
   <button className=" px-10">Invite</button>
   </td>


            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParentList;
