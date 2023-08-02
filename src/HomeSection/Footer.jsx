import React from "react";
import Fb from "../images/facebook.png"
import Tw from "../images/twitter.png"
import insta from "../images/instagram.png";

const Footer = () => {
  return (

    <div className=" flex flex-col w-full h-auto mt-5 bg-primary">

    <div className=" flex flex-row w-full bg-primary h-full mt-5">
      <div className=" w-1/4 h-full flex flex-col ml-10">
        <div className="flex flex-row justify-start">
          <img
            className="w-9 mt-8"
            src="https://cdn-icons-png.flaticon.com/512/565/565665.png"
            alt="logo"
          />
          <span className="mt-9 ml-2 font-semibold text-xl">Dote</span>
        </div>

        <button className="bg-white text-primary w-48 h-10 font-semibold text-sm mt-8">
          Schedule a demo
        </button>
      </div>

      <div className="w-auto h-full flex-grow bg-primary grid grid-cols-4">
        <div className=" mt-9 font-semibold text-base text-white flex flex-col">
          Our Solutions
          <ul className=" font-regular text-xs space-y-2 mt-5">
            <li>Preschool & Childcare</li>
            <li>Parents</li>
            <li>Caregivers</li>
          </ul>
        </div>

        <div className=" mt-9 font-semibold text-base text-white flex flex-col">
          Resources
          <ul className=" font-regular text-xs space-y-2 mt-5">
            <li>Early education & childcare resources</li>
            <li>Customer stories</li>
            <li>Get support</li>
            <li>Help center</li>
            <li>Pricing</li>
            <li>Webinar blogs</li>
            <li>ebooks</li>
            <li>Tools & templates</li>
          </ul>
        </div>


        <div className=" mt-9 font-semibold text-base text-white flex flex-col">
          Our Product
          <ul className=" font-regular text-xs space-y-2 mt-5">
            <li>Features Overview</li>
            <li>Billing</li>
            <li>Communication</li>
            <li>Center Management</li>
            <li>Lesson Plan</li>
            <li>Attendance tracking</li>
            <li>Daily activity report</li>
          </ul>
        </div>


        <div className=" mt-9 font-semibold text-base text-white flex flex-col">
          Company
          <ul className=" font-regular text-xs space-y-2 mt-5">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Security & safety</li>
            <li>Terms of services</li>
            <li>Privacy policy</li>
          </ul>
        </div>

      </div>

    </div>
  
  <div className="mx-10 h-0.5 bg-white rounded-lg mt-5"></div>

  <div className=" flex flex-row w-screen h-auto">

    <span className=" text-white font-regular text-xs mx-10 my-4 w-1/3">Terms & Condition-Privacy Policy</span>
    <div className=" w-1/3 flex flex-row justify-center">
      <img className=" w-auto h-5 my-3 mx-2" src={Fb} alt="Facebook"/> 
      <img className=" w-auto h-5 my-3 mx-2" src={Tw} alt="Twitter"/> 
      <img className=" w-auto h-5 my-3 mx-2" src={insta} alt="Instagram"/>  

    </div>

    <span className=" w-1/3 text-end mx-10 text-white my-4 text-xs">© 2022 - All rights reserved.</span>

  </div>

    </div>
  );
};

export default Footer;
