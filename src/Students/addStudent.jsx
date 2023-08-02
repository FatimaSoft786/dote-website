import React from "react";

const Student = () => {
  return (
    <div className=" w-full h-auto bg-bg">
      <div className=" font-bold text-xl text-[#141E3E] mt-11 ml-7">
        Student list
      </div>

      <div className=" gridlg:grid-cols-2 sm:grid-cols-1">
        <div className=" h-20 flex justify-end items-end  space-x-2 mx-5">
          <button className=" px-4 font-medium text-base leading-none py-2.5 items-end">
            + New student
          </button>
          <button className=" bg-transparent text-primary leading-none px-4 py-2.5 font-medium text-base items-end">
            + Upload roaster
          </button>
        </div>
      </div>

      <div className=" overflow-auto hidden md:block mx-10">
        <table className=" w-full mx-10 mt-10">
          <thead>
            <tr>
              <th className=" px-10 text-sm font-semibold tracking-wide text-left">
                First Name
              </th>
              <th className=" px-10 text-sm font-semibold tracking-wide text-left">
                Last Name
              </th>
              <th className=" px-10 text-sm font-semibold tracking-wide text-left">
                Homeroom
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className=" px-10 text-sm font-regular tracking-wide text-left">
                <input
                  placeholder="First name"
                  name="first"
                  id="first"
                  className=" border-b border-gray-300 focus:border-primary focus:outline-none px-0 py-1"
                />
              </td>
              <td className=" px-10 text-sm font-regular tracking-wide text-left">
                <input
                  placeholder="First name"
                  name="first"
                  id="first"
                  className=" border-b border-gray-300 focus:border-primary focus:outline-none px-0 py-1"
                />
              </td>
              <td className=" px-10 text-sm font-regular tracking-wide text-left">
                <input
                  placeholder="First name"
                  name="first"
                  id="first"
                  className=" border-b border-gray-300 focus:border-primary focus:outline-none px-0 py-1"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className=" grid grid-cols-1 gap-4 md:hidden">
        <div className=" flex items-center space-x-2 text-sm">
          <div>First name</div>
          <div>Last name</div>
          <div>Homeroom</div>
        </div>
      </div>
    </div>
  );
};

export default Student;
