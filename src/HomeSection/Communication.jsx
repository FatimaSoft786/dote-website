import React from "react";
import parent from "../images/parent_engagement.png";
import staff from "../images/staff_message.png";
import photo from "../images/Photo1.png";
import emergency from "../images/emergency_alert.png";
import reminder from "../images/reminder.png";
import calendar from "../images/calendar.png";
import { useTranslation } from "react-i18next";

const Communication = () => {

  const { i18n, t } = useTranslation();

  return (
    <div className=" w-full h-auto mt-10">
      <div className=" shadow-2xl shadow-rose-300 rounded-lg">
        <div className=" grid grid-cols-3 gap-28">
          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={parent} alt="" />
            <hi className=" font-semibold font-poppins text-black1 text-base mt-8">
            {t('Parent engagement')}
            </hi>
            <p className=" font-regular font-poppins  text-black1 mt-3 w-60 h-auto">
            {t('Easily engage and build trust with families, and message everyone at once as needed')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={staff} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            {t('Staff messaging')}
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            {t('Send messages to all staff members or a classroom, and have staff quickly respond directly through the app')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={photo} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            {t('Photos & videos')}
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            {t('Deliver memorable moments right to parents phones')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={emergency} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            {t('Emergency alerts')}
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            {t('Easily send alerts – including SMS and mobile messages')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={reminder} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            {t('Reminders')}
            </hi>
            <p className=" font-regular text-black1 font-poppins mt-3 w-60 h-auto">
            {t('Send quick reminders that include a date and a time')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={calendar} alt="" />
            <hi className=" font-semibold text-black text-base mt-8">
           {t('Calendar')}
            </hi>
            <p className=" font-regular text-black1 font-poppins mt-3 w-60 h-auto">
            {t('Schedule events and activities, and share them with families and staff')}
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center w-full h-auto py-10">
          <button className="w-80 h-12 pt-1 font-poppins items-center">
            {t('Request a demo for these features')}
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-auto py-24">
        <label className=" font-extrabold text-4xl text-black w-1/3 text-center">
          {t('On Dote, join the educators and families.')}
        </label>
        <label className=" font-medium  font-poppins text-base text-[#141E3E]">
          {t('See tips & tricks for using Dote with at home childcare.')}
        </label>
        <button className=" font-poppins w-80 h-12 pt-1">Nannies & childcare</button>
      </div>
    </div>
  );
};

export default Communication;
