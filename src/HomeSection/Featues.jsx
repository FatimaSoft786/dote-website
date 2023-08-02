import React from "react";
import Bulb from "../images/bulb.png";
import Admin from "../images/administration.png";
import { useTranslation } from "react-i18next";
const Features = () => {

  const { i18n, t } = useTranslation();

  return (
    <div className=" w-full h-auto" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
      <img className=" w-36 h-36 ml-32 mr-32" src={Bulb} alt="bulb"></img>
      <div className=" flex justify-center items-center">
      <span className=" font-bold font-poppins max-w-3xl ml-32 mr-32 text-5xl leading-none text-center">
        {t('Designed with your needs in mind')}
      </span>
      </div>


   <div className="flex flex-row justify-center items-center mt-5">

   <div className="bg-white shadow-lg shadow-rose-300 border border-white rounded-lg w-[380px] h-auto  mt-5 ml-5 flex flex-col pb-5">
          <div className="flex justify-center items-center  w-full h-16">
            <img
              className=" w-16 h-full items-center mt-10"
              src={Admin}
              alt="admin"
            />
          </div>
          <div className="mt-10 font-semibold font-poppins text-2xl flex justify-center">
            {t('Administrators & Directors')}
          </div>
          <div className=" mt-2 font-poppins font-regular text-base flex items-center justify-center">
        <span className=" items-center mx-4">{t('Efficiently run your program, from in-home to center-based, single-site and multi-site. Efficiently run your program, from in-home to center-based, single-site and multi-site.')}</span>
          </div>

          <div className=" flex justify-center h-10 bg-primary mx-32 mt-5 rounded-lg">
            <span className=" font-poppins font-medium text-xs text-white items-center text-center py-3.5">
              {t('Learn More')}
            </span>
          </div>

          
        </div>


        <div className="bg-white shadow-lg shadow-rose-300 border border-white rounded-lg w-[380px] h-auto  mt-5 ml-5 flex flex-col pb-5">
          <div className="flex justify-center items-center  w-full h-16">
            <img
              className=" w-16 h-full items-center mt-10"
              src={Admin}
              alt="admin"
            />
          </div>
          <div className="mt-10 font-semibold font-poppins text-2xl flex justify-center">
            {t('Teachers & Staff')}
          </div>
          <div className=" mt-2 font-poppins font-regular text-base flex items-center mx-4">
          {t('Efficiently run your program, from in-home to center-based, single-site and multi-site. Efficiently run your program, from in-home to center-based, single-site and multi-site.')}
          </div>

          <div className=" flex justify-center h-10 bg-primary mx-32 mt-5 rounded-lg">
            <span className=" font-poppins font-medium text-xs text-white items-center text-center py-3.5">
              {t('Learn More')}
            </span>
          </div>
        </div>

        <div className="bg-white shadow-lg shadow-rose-300 border border-white rounded-lg w-[380px] h-auto  mt-5 ml-5 flex flex-col pb-5">
          <div className="flex justify-center items-center  w-full h-16">
            <img
              className=" w-16 h-full items-center mt-10"
              src={Admin}
              alt="admin"
            />
          </div>
          <div className="mt-10 font-semibold font-poppins text-2xl flex justify-center">
            {t('Parents & Guardians')}
          </div>
          <div className=" mt-2 font-poppins font-regular text-base flex items-center mx-4">
          {t('Efficiently run your program, from in-home to center-based, single-site and multi-site. Efficiently run your program, from in-home to center-based, single-site and multi-site.')}
          </div>

          <div className=" flex justify-center h-10 bg-primary mx-32 mt-5 rounded-lg">
            <span className=" font-poppins font-medium text-xs text-white items-center text-center py-3.5">
              {t('Learn More')}
            </span>
          </div>

        </div>


   </div>




      {/* <div className=" grid grid-cols-3 gap-1 mx-12">
      

        <div className=" bg-white shadow-lg shadow-red-500/50 border border-white rounded-lg w-96 h-80  mt-5 ml-5 flex flex-col pb-5">
          <div className="flex justify-center items-center  w-full h-16">
            <img
              className=" w-16 h-full items-center mt-10"
              src={Admin}
              alt="admin"
            />
          </div>
          <div className="mt-10 font-bold text-xl flex justify-center">
            Administrators & Directors
          </div>
          <div className=" mt-2 font-regular flex items-center mx-4">
            Efficiently run your program, from in-home to center-based,
            single-site and multi-site. Efficiently run your program, from
            in-home to center-based, single-site and multi-site.
          </div>

          <div className=" flex justify-center h-10 bg-primary mx-32 mt-5 rounded-lg">
            <span className=" font-poppins font-medium text-xs text-white items-center text-center mt-2.5">
              Learn more
            </span>
          </div>
        </div>

        <div className="bg-white shadow-lg shadow-red-500/50 border border-white rounded-lg w-96 h-80  mt-5 ml-5 flex flex-col pb-5">
          <div className="flex justify-center items-center  w-full h-16">
            <img
              className=" w-16 h-full items-center mt-10"
              src={Admin}
              alt="admin"
            />
          </div>
          <div className="mt-10 font-bold text-xl flex justify-center">
            Administrators & Directors
          </div>
          <div className=" mt-2 font-regular flex items-center mx-4">
            Efficiently run your program, from in-home to center-based,
            single-site and multi-site. Efficiently run your program, from
            in-home to center-based, single-site and multi-site.
          </div>

          <div className=" flex justify-center h-10 bg-primary mx-32 mt-5 rounded-lg">
            <span className=" font-poppins font-medium text-xs text-white items-center text-center mt-2.5">
              Learn more
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Features;
