import React, { useState } from "react";
import Left from "../images/left.png";
import Frame2 from "../images/frame2.png";
import Frame3 from "../images/frame3.png";
import Right from "../images/right.png";
import Overview from "../HomeSection/Overview";
import Reviews from "../HomeSection/Reviews";
import Billing from "../Preschool/Billing&Payment";
import Features from "./Featues";
import Footer from "./Footer";
import Communication from "../HomeSection/Communication";
import CenterManagement from "../HomeSection/CenterManagement";
import { useTranslation } from "react-i18next";
const Home = () => {
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
    <div className="h-auto w-full">

      <div
        className="flex flex-col justify-center items-center"
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        {/* <div className=" mt-32 mb-0 ml-60 mr-60 h-8">
   <span className={`text-primary text-xl leading-loose font-noto font-bold`}>
             {t('#1 Childcare Section')}
          </span>
   </div> */}

        <div className={`ml-20 mr-20 mt-32`}>
          <span className=" text-6xl items-center text-black1 font-extrabold  leading-tight">
            {t("Improve early education")}
          </span>
        </div>

        <div className="flex justify-center items-center w-2/3  my-1">
          <span className="text-center font-poppins font-regular text-black1/75 text-xs pt-2">
            {t(
              " Dote's all-in-one platform is designed to save you and your staff time because it is simple to set up and even simpler to use."
            )}
          </span>
        </div>
      </div>

      <div className=" flex justify-center items-center">


        <div className="items-center flex flex-row">
          <img className="w-[204px] h-[328px] mt-28" src={Left} alt="left" />
          <img
            className="w-[558px] h-[169px] mx-[24px] mt-72"
            src={Frame2}
            alt="left"
          />
          <img
            className="w-[215.7px] h-[169px] mr-[40px] mt-72"
            src={Frame3}
            alt="left"
          />
          <img className="w-[189.17px] h-[481px] " src={Right} alt="right" />
        </div>

        <div className="flex justify-center mb-[400px] absolute">
        <div className=" w-[600px] h-[50px]  bg-white  shadow-[20px_10px_30px_rgba(255,_91,_96,_0.1)]  rounded-lg border border-white">
          <div className="flex items-center h-full" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
            <input
              type="text"
              placeholder={t('Enter email address')}
              className="w-full h-full rounded-lg focus:outline-none leading-none px-2 font-poppins font-medium text-sm text-black1/75 "
            />
            <button className="bg-primary text-white rounded-lg hover:bg-primary hover:text-primary hover:bg-transparent w-1/4 h-full py-0 ">
              {t('Submit')}
            </button>
          </div>
        </div>
      </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="font-bold font-poppins text-5xl my-20 max-w-4xl text-center">
          {t('Your full software solution for childcare and preschool')}
        </div>
      </div>

      <div className="flex flex-row justify-center items-center" dir={i18n.language === 'ar' ? 'rtl' : 'lr'}>
      <button
            className={
              selectedButton === "button1"
                ? " mr-20 py-0 px-10 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base rounded-[17px]"
                : "mr-20 bg-white text-primary py-0 px-10 border-white border h-14 font-poppins font-medium text-base rounded-[17px]"
            }
            onClick={() => {
              handleClick("button1");
              setActiveButton(1);
              handleButtonClick(false);
            }}
          >
           {t('Overview')}
          </button>
          <button
            className={
              selectedButton === "button2"
                ? " mr-20 py-2 px-10 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base rounded-[17px]"
                : "mr-20 bg-white text-primary py-2 px-10 border-white border w-30 h-14 font-poppins font-medium text-base rounded-[17px]"
            }
            onClick={() => {
              handleClick("button2");
              setActiveButton(2);
              handleButtonClick(false);
            }}
          >
           {t('Billing & payments')}
          </button>

          <button
            className={
              selectedButton === "button3"
                ? " mr-20 py-2 px-10 w-30 h-14 bg-transparent text-primary border border-primary shadow-lg shadow-rose-300 font-poppins font-medium text-base  rounded-[17px]"
                : "mr-20 bg-white text-primary py-2 px-10 border-white border w-30 h-14 font-poppins font-medium text-base  rounded-[17px]"
            }
            onClick={() => {
              handleClick("button3");
              setActiveButton(3);
              handleButtonClick(false);
            }}
          >
            {t('Communication')}
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
            {t('Childcare management')}
          </button>
      </div>
      {showDiv && (
            <div className="ml-0">
              <Overview />
              <Features />
            </div>
          )}
          {activeButton === 1 && (
            <>
              <Overview />
              <Features />
            </>
          )}
          {activeButton === 2 && (
            <div className=" ml-10 mr-32">
              <Billing />
            </div>
          )}
          {activeButton === 3 && (
            <div className=" ml-10 mr-32">
              <Communication />
            </div>
          )}
          {activeButton === 4 && (
            <div className=" ml-10 mr-32">
              <CenterManagement />
            </div>
          )}
            <Footer />
    </div>
  );
};

export default Home;
 // <div className="flex flex-col h-auto w-auto">
    //   <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
    //     <div className="flex items-start justify-between flex-col">
    //       <span className="text-primary pt-12 mt-20 font-bold font-poppins text-xl leading-none">
    //         {t('#1 Childcare Se`ction')}
    //       </span>
    // </div>