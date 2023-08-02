import React from "react";
import Play from "../images/video.png";
import WebPic from "../images/webinar_pic.png";
import { useTranslation } from 'react-i18next';
const Webinar = () => {

  const { i18n,t } = useTranslation();

  return (
    <div className=" w-full h-auto mt-20">
      <div className=" w-full h-auto flex flex-col items-center justify-center">
        <h1 className=" w-1/2 text-center text-black text-6xl font-extrabold items-center">
          {t('Dote Webinars')}
        </h1>
        <p className="text-black text-lg w-1/2 text-center">
          {t('Training possibilities for early childhood educators that are both live and recorded')}
        </p>
        {/* <button className="h-12 w-56 mr-5">See all Webinars</button> */}
      </div>

      <div className="w-full h-auto flex justify-center mt-10">
        <div className=" w-1/2 rounded-2xl border-white shadow-md shadow-rose-200 items-center justify-center flex flex-col p-4">
          <h1 className="text-[#141E3E] text-4xl items-center py-2 font-bold">
            {t('Next live webinar')}
          </h1>
          <p className="h-auto font-semibold text-base text-center px-24">
            {t('Leading with Emotional Intelligence: How to Boost Staff Communication and Collaboration')}
          </p>

          <p className="h-auto font-medium text-base text-[#141E3E]/75 text-center">
            {t('Join us for our live webinar to learn what you can do to lead with emotional intelligence and boost your staff’s EQ for success in and out of the classroom.')}
          </p>

          <p className=" font-semibold text-xs text-primary mt-5">
            Wednesday, December 7th | 9 AM Pacific/Noon Eastern
          </p>

          <button className="w-80 h-12 text-whiterounded-lg">
           {t('Learn more and sign up')}
          </button>
        </div>
      </div>

      <div className=" font-bold text-xl text-[#141E3E] mx-10 mt-10" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
        {t('How to use dote')}
      </div>

      <div className="grid grid-cols-3 mx-10 mt-3">
        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
           {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-2 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start ml-2 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

     
      </div>

      <div className=" font-bold text-xl text-[#141E3E] mx-10 mt-10" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
        {t('HIRING & DEVELOPING STAFF')}
      </div>
      <div className="grid grid-cols-3 mx-10 mt-3">
        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-2 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start ml-2 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>
      </div>

      <div className=" font-bold text-xl text-[#141E3E] mx-10 mt-10" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
        {t('BUILDING STRONG RELATIONS WITH FAMILIES')}
      </div>
      <div className="grid grid-cols-3 mx-10 mt-3">
        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-2 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start ml-2 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

      </div>

      <div className=" font-bold text-xl text-[#141E3E] mx-10 mt-10" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
        {t('GROWING UNROLLMENT & MARKETING YOUR BUSINESS')}
      </div>
      <div className="grid grid-cols-3 mx-10 mt-3">
        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-2 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start ml-2 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>
      </div>

      <div className=" font-bold text-xl text-[#141E3E] mx-10 mt-10" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
      {t('Early education business operations and finances')}
      </div>
      <div className="grid grid-cols-3 mx-10 mt-3">
        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start mr-5 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-2 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

        <div className=" flex flex-col justify-start ml-2 mt-5">
          <div className="h-auto relative">
            <img className=" h-96 rounded-2xl" src={WebPic} alt="Webinar" />
            <div className="absolute top-2 left-0 right-1 bottom-0 flex justify-end">
              <img className="w-8 h-8" src={Play} alt="Play" />
            </div>
          </div>

          <div className=" text-sm text-black mt-2" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')}
          </div>
        </div>

       

      
      </div>

    </div>
  );
};

export default Webinar;
