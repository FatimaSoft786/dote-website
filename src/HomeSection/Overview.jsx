import React from "react";
import left from "../images/right.png";
import Count from "../images/count.png";
import Reading from "../images/reading.png";
import Writing from "../images/writing.png";
import { useTranslation } from "react-i18next";
const Overview = () => {

  const { i18n, t } = useTranslation();

  return (
   <div className=" h-auto w-full flex flex-col">
   <div className=" flex flex-row justify-center items-center">

   <div className="relative mt-10">
    <div className=" h-[495px] w-[224px]">
      <img className="h-full w-full" src={left} alt="left" />
    </div>
    <div className="absolute -left-20 top-96 w-40 h-20 bg-white z-10 rounded-lg drop-shadow-lg">
      <div className="flex flex-row">
        <div className=" w-1/3 items-center justify-start leading-none">
          <img className="w-9 h-9 ml-6 mt-5" src={Count} alt="count" />
        </div>

        <div className=" w-2/3 py-4 flex flex-col items-center justify-center" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          <span className=" text-xs text-[#111231] font-medium font-poppins">{t('Counting')}</span>
          <span className=" font-poppins font-semibold text-xl text-[#111231]">10,0000</span>
        </div>
      </div>
    </div>
  </div>


  <div className="flex flex-col justify-start ml-5">
    <img className="w-[159px] h-[183px] mt-0" src={Writing} alt="writing"/>
    <img className="w-[224px] h-[274px] pt-2" src={Reading} alt="reading"/>
  </div>

  <div className=" w-1/3 h-auto ml-20 my-0 flex flex-col justify-start" dir={i18n.language === 'ar'? 'rtl': 'ltr'}>
    <span className="text-black1/75 font-poppins font-medium text-xl flex justify-start mb-2">{t('Testimonial')}</span>
    <span className=" text-black1 font-poppins font-semibold text-4xl mb-4">
      {t('Everything you need is in one integrated app.')}
    </span>
    <span className=" text-black1/75 font-poppins font-medium text-base mt-2">
     {t("When we were comparing tools, we settled on dote since it combines billing, admissions, and a fantastic visual experience for families.")}
    </span>
    <button className=" px-5 py-3 w-40 mt-2 font-poppins font-medium text-base bg-primary text-white rounded-[10px]">{t('Learn More')}</button>
  </div>


   </div>
   </div>
  );
};

export default Overview;
