import React from "react";
import BG from "../images/Bg.png";
import tick from "../images/tick.png";
import award from "../images/award.png";
import safe from "../images/safe.png";
import training from "../images/training.png";
import Footer from "../HomeSection/Footer";
import { useTranslation } from "react-i18next";
const Pricing = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="w-full h-auto mt-10">
      <div className="flex flex-col items-center justify-center h-auto">
        <h1 className=" text-black1 font-poppins font-bold text-5xl w-1/2 text-center mt-20">
          {t('With our best pricing ever.')}
        </h1>
        <p className=" font-bold font-poppins text-black1 text-xs mt-3">
          {t('Join thousands of schools and millions of parents using dote every day')}
        </p>
        <div className=" w-1/2 h-14 border-white bg-white shadow-md shadow-rose-300  border rounded-lg mt-5" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
          <div className="flex items-center h-full">
            <input
              type="text"
              placeholder={t('Enter a email address')}
              className="w-full h-full border font-poppins text-black1/75 rounded-lg border-white focus:outline-none leading-none pl-2"
            />
            <button className="bg-primary font-poppins text-white rounded-lg hover:bg-transparent hover:text-primary w-1/3 h-full py-0 mb-0">
              {t('Get your pricing now')}
            </button>
          </div>
        </div>
      </div>

      <div className="h-auto w-auto mt-20 mx-60 flex flex-col items-center justify-center bg-cover bg-background">
        <h1 className="text-black text-6xl font-extrabold mt-20">
         {t('Early childcare all-in-one solution')}
        </h1>
        <p className=" font-bold text-sm">
          {t('Ideal for single or multi-site centers, who have more than 1 staff and/or are looking to grow')}
        </p>
        <div className="grid grid-cols-2 mt-10">
          <div className=" flex flex-col mr-28">
            <hi className=" font-bold text-lg my-2">{t('Delight Families')}</hi>
            <div className=" flex flex-row">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Share milestones, photos, and videos to keep families connected')}
              </p>
            </div>

            <div className=" flex flex-row my-4">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Send messages, newsletters, and SMS alerts to share important updates')}
              </p>
            </div>
          </div>

          <div className=" flex flex-col ml-28">
            <hi className=" font-bold text-lg my-2">{t('Grow enrollment')}</hi>
            <div className=" flex flex-row">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
               {t('Accept online forms, signatures, and messages to make applying easier for families')}
              </p>
            </div>

            <div className=" flex flex-row my-4">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Streamline application tracking and waitlist management to reduce your paperwork')}
              </p>
            </div>
          </div>

          <div className=" flex flex-col mr-28">
            <hi className=" font-bold text-lg my-4">{t('Empower staff')}</hi>
            <div className=" flex flex-row">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Provide staff an easy tool to customize lesson plans and manage daily reports')}
              </p>
            </div>

            <div className=" flex flex-row my-2">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Enable staff to make observations per State, DRDP, and Montessori standards')}
              </p>
            </div>

            <div className=" flex flex-row my-2">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
               {t('Use direct or group-based messaging with staff to share updates and foster community')}
              </p>
            </div>
          </div>

          <div className=" flex flex-col ml-28">
            <hi className=" font-bold text-lg my-4">{t('Simplify billing')}</hi>
            <div className=" flex flex-row">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Automate tuition invoicing and charges, including early pick-up, late drop-off, and late payments')}
              </p>
            </div>

            <div className=" flex flex-row my-2">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Give families the option to pay online, turn-on autopay, and print their year-end receipts directly')}
              </p>
            </div>

            <div className=" flex flex-row my-2">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Get next business day direct deposits and get paid on time')}
              </p>
            </div>

            <div className=" flex flex-row my-2">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-52 font-semibold text-xs">
                {t('Centralize records and get accurate financial reports to simplify the year-end tax process')}
              </p>
            </div>
          </div>

          <div className="flex flex-col ml-0">
            <hi className=" font-bold text-lg my-2">{t('Streamline operations')}</hi>
            <div className=" flex flex-row">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-auto font-semibold text-xs">
                {t('Stay COVID-19 compliant with contactless check-in, health checks, and room ratio tracking')}
              </p>
            </div>

            <div className=" flex flex-row my-2">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-auto font-semibold text-xs">
                {t('Rest easy with phone or live chat support, directly from your dote web or mobile app')}
              </p>
            </div>

            <div className=" flex flex-row">
              <img className=" w-6 h-6" src={tick} alt="" />
              <p className=" mx-2 w-auto font-semibold text-xs">
                {t('Schedule events and activities on the calendar to easily share with families and staff')}
              </p>
            </div>
          </div>
        </div>
        <div className=" py-5">
          <button className="w-auto h-12 px-4">
           {t('Unlock promotions and get your quote')}
          </button>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center h-auto font-bold text-4xl text-black mt-10">
        Dote customers on center management
      </div> */}

      {/* <div className=" flex flex-row w-full mx-60 h-auto mt-10">
        <div className=" w-1/4 h-36 flex flex-row shadow-lg mt-5">
          <img
            className=" w-20 h-20 rounded-2xl border border-white mt-8 ml-5"
            src={safe}
            alt="profile"
          />

          <div className=" flex flex-col mt-10 ml-5">
            <h1 className=" font-bold text-black text-xl">Hussain</h1>
            <p className=" font-medium text-[#141E3E] text-base">CEO of dote</p>
          </div>
        </div>

   <div className=" w-1/2 h-auto flex flex-col justify-start items-start mt-6 pl-96">
  <h1 className=" font-bold text-[#141E3E] text-lg text-center">Great visual experience for families</h1>
  <p className=" w-96 font-normal text-[#141E3E] text-sm">Parents have said they chose our preschool because of the Dote app. The value it adds to our staff’s day and to our parents’ days is priceless.</p>

   </div>

      </div> */}

      <div className="flex flex-col items-center justify-center h-auto font-bold text-4xl text-black mt-10">
        {t('Its worth it')}
      </div>

      <div className=" grid grid-cols-3 mx-60 my-10">
        <div className=" rounded-lg border border-white shadow-lg shadow-rose-300 flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-14 h-14 mt-5" src={award} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">
            {t('Award winning support')}
          </p>

          <p className=" font-regular text-base mx-5 text-center">
            {t('Our world class customer support is here for you, including many former educators and early childhood professionals.')}
          </p>
        </div>

        <div className=" rounded-lg border border-white shadow-lg shadow-rose-300 flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-14 h-14 mt-5" src={safe} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">{t('Safe & secure')}</p>

          <p className=" font-regular text-base mx-5 text-center">
            {t('We take your trust very seriously and have invested a great deal to build the most reliable and secure platform in early education.')}
          </p>
        </div>

        <div className=" rounded-lg border border-white shadow-lg shadow-rose-300 flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-14 h-14 mt-5" src={training} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">
            {t('No training required')}
          </p>

          <p className=" font-regular text-base mx-5 text-center">
            {t('Get set up in minutes. No training required. Powerful, yet simple and easy to use.')}
          </p>
        </div>
      </div>
      <Footer/>

    </div>
  );
};

export default Pricing;
