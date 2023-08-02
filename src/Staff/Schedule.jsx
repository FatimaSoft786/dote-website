import React from "react";
import profile from "../images/profile_pic.png";

const Schedule = () => {
  return (
    <div className=" w-screen h-full bg-slate-100">
      <div className=" px-5 py-5 flex flex-row">
        <span className=" font-poppins font-bold text-xl text-black1 leading-none">
          Room
        </span>
        {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class=" text-primary bg-transparent  focus:outline-none focus:ring-blue-300 font-poppins font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center" type="button">All Room<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<div id="dropdown" class="z-10 hidden bg-transparent divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> */}
      </div>

      <div className=" flex flex-row justify-end mx-10 space-x-2">
        <button className=" font-poppins font-medium text-base text-white px-8">
          Staff Schedule
        </button>
        <button className=" font-poppins font-medium text-base text-white px-8">
          Student Schedule
        </button>
        <button className=" font-poppins font-medium text-base text-white px-8">
          Print
        </button>
      </div>

      <div className=" flex justify-start px-5">
        <table className=" font-poppins  my-10">
          <thead className=" font-poppins font-semibold text-xs">
            <tr>
              <th className=" py-3 pr-40">Active Staff</th>
              <th className=" pr-20 pl-10">1st January</th>
              <th className="pr-20 pl-10">2nd January</th>
              <th className="pr-20 pl-10">3rd January</th>
              <th className="pr-20 pl-10">4th January</th>
              <th className="pr-20 pl-10">5th January</th>
              <th className="pr-20 pl-10">6th January</th>
              <th className="pr-20 pl-10">7th January</th>
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
                  <div className=" flex flex-col mx-2 h-auto my-2">
                    <span className=" font-poppins font-semibold text-sm text-black1 leading-none">
                      Maryam
                    </span>
                  </div>
                </div>
              </td>

              <td className=" border-black1/10 border-2 border-solid">
                <div className=" mx-1 flex flex-col justify-center bg-purple/10 h-full py-3">
                  <span className="text-center font-poppins font-semibold text-xs">
                    Homeroom
                  </span>
                  <span className=" text-center font-poppins font-medium text-xs">
                    8:30am-4:00pm
                  </span>
                </div>
              </td>

              <td className=" border-black1/10 border-2 border-solid">
                <div className=" mx-1 flex flex-col justify-center bg-green/10 h-full py-3">
                  <span className="text-center font-poppins font-semibold text-xs">
                    Homeroom
                  </span>
                  <span className=" text-center font-poppins font-medium text-xs">
                    8:30am-4:00pm
                  </span>
                </div>
              </td>

              <td className=" border-black1/10 border-2 border-solid">
                <div className=" mx-1 flex flex-col justify-center bg-purple/10 h-full py-3">
                  <span className="text-center font-poppins font-semibold text-xs">
                    Homeroom
                  </span>
                  <span className=" text-center font-poppins font-medium text-xs">
                    8:30am-4:00pm
                  </span>
                </div>
              </td>

              <td className=" border-black1/10 border-2 border-solid">
                <div className=" mx-1 flex flex-col justify-center bg-purple/10 h-full py-3">
                  <span className="text-center font-poppins font-semibold text-xs">
                    Homeroom
                  </span>
                  <span className=" text-center font-poppins font-medium text-xs">
                    8:30am-4:00pm
                  </span>
                </div>
              </td>

              <td className=" border-black1/10 border-2 border-solid">
                <div className=" mx-1 flex flex-col justify-center bg-purple/10 h-full py-3">
                  <span className="text-center font-poppins font-semibold text-xs">
                    Homeroom
                  </span>
                  <span className=" text-center font-poppins font-medium text-xs">
                    8:30am-4:00pm
                  </span>
                </div>
              </td>

              <td className=" border-black1/10 border-2 border-solid">
                <div className=" mx-1 flex flex-col justify-center bg-purple/10 h-full py-3">
                  <span className="text-center font-poppins font-semibold text-xs">
                    Homeroom
                  </span>
                  <span className=" text-center font-poppins font-medium text-xs">
                    8:30am-4:00pm
                  </span>
                </div>
              </td>

              <td className=" border-black1/10 border-2 border-solid">
                <div className=" mx-1 flex flex-col justify-center bg-purple/10 h-full py-3">
                  <span className="text-center font-poppins font-semibold text-xs">
                    Homeroom
                  </span>
                  <span className=" text-center font-poppins font-medium text-xs">
                    8:30am-4:00pm
                  </span>
                </div>
              </td>


            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Schedule;
