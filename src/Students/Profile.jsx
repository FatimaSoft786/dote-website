import React from "react";

const Profile = () => {
  return (
    <div className=" w-full h-full">
      <div className=" flex flex-row mx-5 my-5">
        <div className=" w-1/2 flex justify-start flex-row">
        <div className=" bg-purple rounded-full w-4 h-4 mt-1 ml-10" />
        <span className=" font-poppins font-semibold text-base mx-2">
          PERSONAL INFO
        </span>
        </div>
       

    <div className=" w-1/2">

    <span className="inline-block border-b text-blue border-blue font-poppins font-semibold text-base items-end">
          Edit
        </span>
    </div>

       
      </div>

      <div className=" flex flex-col">
        <div className=" flex flex-row mx-10">
          <span className=" font-poppins font-medium text-base mx-11 text-black1/30">
            Name
          </span>
          <span className=" font-poppins font-medium text-base mx-60 my-1 text-black1">
            Alex Scott
          </span>
        </div>

    <div className="h-0.5 bg-gray rounded-full mx-20 my-5"/>

    <div className=" flex flex-row mx-5 my-5">
        <div className=" bg-primary rounded-full w-4 h-4 mt-1 ml-10" />
        <span className=" font-poppins font-semibold text-base ml-2 mr-16">
          ADDRESS
        </span>
        <span className=" inline-block border-b text-blue border-blue font-poppins font-semibold text-base mx-96">
          Edit
        </span>
      </div>

      <div className=" flex flex-row mx-10">
          <span className=" font-poppins font-medium text-base mx-11 text-black1/30">
            Address
          </span>
          <span className=" font-poppins font-medium text-base mx-60 my-1 text-black1">
            Multan
          </span>
        </div>

        <div className="h-0.5 bg-gray rounded-full mx-20 my-5"/>

<div className=" flex flex-row mx-5 my-5">
    <div className=" bg-green rounded-full w-4 h-4 mt-1 ml-10" />
    <span className=" font-poppins font-semibold text-base ml-2 mr-20">
      ROOMS
    </span>
    <span className=" inline-block border-b text-blue border-blue font-poppins font-semibold text-base mx-96">
      Edit
    </span>
  </div>

  <div className=" flex flex-row mx-10">
      <span className=" font-poppins font-medium text-base mx-11 text-black1/30">
        Homeroom
      </span>
      <span className=" font-poppins font-medium text-base mx-60 my-1 text-black1">
        Toddlers
      </span>
    </div>

    <div className="h-0.5 bg-gray rounded-full mx-20 my-5"/>

<div className=" flex flex-row mx-5 my-5">
    <div className=" bg-purple rounded-full w-4 h-4 mt-1 ml-10" />
    <span className=" font-poppins font-semibold text-base ml-2 mr-0">
    SCHOOL DETAILS
    </span>
    <span className=" inline-block border-b text-blue border-blue font-poppins font-semibold text-base mx-96">
      Edit
    </span>
  </div>

  <div className=" flex flex-row mx-10">
      <span className=" font-poppins font-medium text-base mx-11 text-black1/30">
      Status
      </span>
      <span className=" font-poppins font-medium text-base mx-60 my-1 text-black1">
        Active
      </span>
    </div>


    <div className="h-0.5 bg-gray rounded-full mx-20 my-5"/>

<div className=" flex flex-row mx-5 my-5">
    <div className=" bg-purple rounded-full w-4 h-4 mt-1 ml-10" />
    <span className=" font-poppins font-semibold text-base ml-2 -mr-8">
   ENROLLMENT DETAILS
    </span>
    <span className=" inline-block border-b text-blue border-blue font-poppins font-semibold text-base mx-96">
      Edit
    </span>
  </div>

  <div className=" flex flex-row mx-10">
      <span className=" font-poppins font-medium text-base mx-11 text-black1/30">
      Status
      </span>
      <span className=" font-poppins font-medium text-base mx-60 my-1 text-black1">
        Active
      </span>
    </div>



      </div>
    </div>
  );
};

export default Profile;
