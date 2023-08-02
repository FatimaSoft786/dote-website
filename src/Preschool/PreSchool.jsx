import React, { useState } from "react";
import Color1 from "../images/Color1.png";
import Payment from "../Preschool/Billing&Payment";
import Footer from "../HomeSection/Footer";
import Communication from "../Preschool/Communication";
import CenterManagement from "../Preschool/CenterManagement";
import LessonPlans from "../LessonPlans/LessonPlans";
import { useTranslation } from "react-i18next";
import Billing from "../Preschool/Billing&Payment";
import Features from "../HomeSection/Featues";
import LessonPlaning from "./LessonPlaning";
const PreSchool = () => {
  const { i18n, t } = useTranslation();

  const [activeButton, setActiveButton] = useState(null);
  const [selectedButton, setSelectedButton] = useState("button1");
  const [showDiv, setShowDiv] = useState(true);
  const handleButtonClick = (check) => {
    setShowDiv(check);
  };
  const handleClick = (button) => {
    setSelectedButton(button);
  };



  return (
    <div className=" w-full h-auto">
      <div className="relative h-auto">
        <img className="w-full h-96" src={Color1} alt="example" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
          <h1 className="text-black text-6xl font-extrabold">
            {t('The day of your child in real time')}
          </h1>
          <p className="text-black text-lg">
            {t('Easy and intuitive school communication. Invite your school')}
          </p>

          <div className=" w-auto h-auto flex flex-row">
            <button className="h-12 w-56 mr-5">{t('Request a demo')}</button>
            <button className="h-12 w-56  bg-transparent text-primary rounded-lg text-xs">
              {t('Watch the video')}
            </button>
          </div>

          <p className=" text-black font-bold text-4xl mt-8">{t('Dote features')}</p>
          <p className=" w-96 text-[#141E3E] text-center text-xs">
            {t('The comprehensive preschool and childcare management system incorporates real-time communication, automatic billing and payments, and much more.')}
          </p>
        </div>
      </div>

   <div className="flex flex-row justify-evenly items-center mt-3" dir={i18n.language === 'ar' ? 'rtl' : 'lr'}>
          <button
            className={
              selectedButton === "button1"
                ? " ml-20 py-0 px-5 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium  rounded-[17px] text-start"
                : "ml-20 bg-white text-primary py-0 px-5 border-white border h-14 font-poppins font-medium rounded-[17px] text-start"
            }
            onClick={() => {
              handleClick("button1");
              setActiveButton(1);
              handleButtonClick(false);
            }}
          >
           {t('Billing & payments')}
          </button>

          <button
            className={
              selectedButton === "button2"
                ? " mr-20 py-2 px-5 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base rounded-[17px]"
                : "mr-20 bg-white text-primary py-2 px-5 border-white border w-30 h-14 font-poppins font-medium text-base rounded-[17px]"
            }
            onClick={() => {
              handleClick("button2");
              setActiveButton(2);
              handleButtonClick(false);
            }}
          >
          {t('Communication')}
          </button>

          <button
            className={
              selectedButton === "button3"
                ? " mr-20 py-2 px-5 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base  rounded-[17px]"
                : "mr-20 bg-white text-primary py-2 px-5 border-white border w-30 h-14 font-poppins font-medium text-base  rounded-[17px]"
            }
            onClick={() => {
              handleClick("button3");
              setActiveButton(3);
              handleButtonClick(false);
            }}
          >
            {t('Center management')}
          </button>

          <button
            className={
              selectedButton === "button4"
                ? " mr-20 py-2 px-10 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base  rounded-[17px]"
                : "mr-20 bg-white text-primary py-2 px-10 border-white border w-30 h-14 font-poppins font-medium text-base  rounded-[17px]"
            }
            onClick={() => {
              handleClick("button4");
              setActiveButton(4);
              handleButtonClick(false);
            }}
          >
             {t('Lesson Plans')}
          </button>

          {/* <button
            className={
              selectedButton === "button5"
                ? " mr-20 py-2 px-5 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base  rounded-[17px]"
                : "mr-20 bg-white text-primary py-2 px-5 border-white border w-30 h-14 font-poppins font-medium text-base  rounded-[17px]"
            }
            onClick={() => {
              handleClick("button5");
              setActiveButton(5);
              handleButtonClick(false);
            }}
          >
             {t('Attendance')}
          </button> */}

          <button
            className={
              selectedButton === "button6"
                ? " mr-10 py-2 px-5 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base  rounded-[17px]"
                : "mr-10 bg-white text-primary py-2 px-5 border-white border w-30 h-14 font-poppins font-medium text-base  rounded-[17px]"
            }
            onClick={() => {
              handleClick("button6");
              setActiveButton(6);
              handleButtonClick(false);
            }}
          >
              {t('Daily Active Report')}
          </button>


   </div>

   {showDiv && (
            <div className="ml-0">
              <Billing />
              <Footer />
            </div>
          )}

          {activeButton === 1 && (
            <>
            <Billing />
              <Footer />
            </>
          )}

          {activeButton === 2 && (
            <div className=" ml-10 mr-32">
              <Communication />
              <Footer />
            </div>
          )}

          {activeButton === 3 && (
            <div className=" ml-10 mr-32">
              <CenterManagement/>
              <Footer />
            </div>
          )}

          {activeButton === 4 && (
            <div className=" ml-10 mr-32">
              <LessonPlaning/>
              <Footer />
            </div>
          )}


     
    </div>
  );
};

export default PreSchool;
