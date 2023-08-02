import React from "react";
import Dropdown from "../utils/dropdown";
import profile from "../images/profile_pic.png";
const StudentList = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className=" w-full h-full bg-slate-100 pt-11">


      <div className=" font-bold text-xl text-[#141E3E] ml-7">Students</div>

      <div className=" hidden md:block">
        <div className=" flex flex-row justify-end space-x-2 mx-5">
          <button className=" px-4 font-medium text-base leading-none py-2.5 items-end">
            + New student
          </button>
          <button className=" bg-transparent text-primary leading-none px-4 py-2.5 font-medium text-base items-end">
            + Upload roaster
          </button>
        </div>
      </div>

      <div className=" hidden md:block mx-5 h-auto bg-white shadow-lg rounded-lg">
        <div className=" flex flex-row justify-between h-auto mt-10 py-10">
          <div className="justify-start mx-3 flex flex-row">
            <Dropdown options={options} />

            <Dropdown options={options} />

            <Dropdown options={options} />
          </div>

          <div className=" justify-end mt-1.5 mx-5">
            <span className=" bg-primary px-8 rounded-lg text-white cursor-pointer py-2 font-regular text-base">
              Apply
            </span>
          </div>
        </div>

        <div className=" hidden md:block">
        <div className=" w-full h-auto flex flex-row mx-8 my-2 space-x-1">
          <span className="text-black1/40 font-medium text-sm">Order By:</span>
          <span className=" text-primary font-medium text-base leading-none mt-0.5">
            First Name
          </span>
          <div className=" w-0.5 h-6 bg-black/10"></div>
          <span className=" text-black1 font-medium text-base leading-none mt-0.5">
            Last Name
          </span>
          <span className=" text-primary px-20 font-regular text-xs leading-none mt-1.5">
            Watch Video
          </span>
        </div>
        </div>

        <div className=" hidden md:block w-full h-0.5 bg-black1/20"></div>
       
       <div className=" hidden md:block">
       <ul>
          <li>
            <div className=" flex flex-row px-5 py-5">
              <img
                className=" rounded-full w-10 h-10 bg-contain"
                src={profile}
                alt="profile"
              />
              <span className=" text-black font-semibold text-base leading-none mt-2 mx-5">
                Hussain
              </span>
            </div>
          </li>
        </ul>
       </div>
      </div>

      <div className="hidden md:block">

        <div className=" flex flex-row justify-end">

            <span className=" text-primary font-semibold text-xs mx-5 my-5">Help Center</span>

        </div>

      </div>

      {/* for mobile app */}

      <div className=" grid grid-cols-1 justify-end md:hidden mx-10">
        <button className=" px-4 font-medium text-base leading-none py-2.5 items-end">
          + New student
        </button>
        <button className=" bg-transparent text-primary leading-none px-4 py-2.5 font-medium text-base items-end">
          + Upload roaster
        </button>
      </div>

      <div className=" grid grid-cols-1 mt-5 h-auto w-full md:hidden">
        <div className=" flex flex-col space-y-3">
          <Dropdown options={options} />

          <Dropdown options={options} />

          <Dropdown options={options} />

          <div className=" flex justify-center mx-5 h-auto">
            <span className=" items-center w-full bg-primary px-8 rounded-lg text-white cursor-pointer py-2 font-regular text-base text-center">
              Apply
            </span>
          </div>
        </div>
      </div>

      <div className=" w-full h-auto flex flex-row mx-8 my-2 space-x-1 md:hidden">
          <span className="text-black1/40 font-medium text-sm">Order By:</span>
          <span className=" text-primary font-medium text-base leading-none mt-0.5">
            First Name
          </span>
          <div className=" w-0.5 h-6 bg-black/10"></div>
          <span className=" text-black1 font-medium text-base leading-none mt-0.5">
            Last Name
          </span>
          <span className=" text-primary px-5 font-regular text-xs leading-none mt-1.5">
            Watch Video
          </span>
        </div>
        <div className=" w-full h-0.5 bg-black1/20 md:hidden"></div>

        <div className="md:hidden">
       <ul>
          <li>
            <div className=" flex flex-row px-5 py-5">
              <img
                className=" rounded-full w-10 h-10 bg-contain"
                src={profile}
                alt="profile"
              />
              <span className=" text-black font-semibold text-base leading-none mt-2 mx-5">
                Hussain
              </span>
            </div>
          </li>
        </ul>
       </div>

    </div>
  );
};

export default StudentList;
