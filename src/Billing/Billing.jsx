import React from "react";
import Mockup from "../images/billing_mockup.png";
import Send from "../images/send.png";
import Reduce from "../images/reduce_paperwork.png";
import operate_billing from "../images/operate_billing.png";
import Offer from "../images/offer.png";
import invoice_mockup from "../images/invoice_mockup.png";
import digitize from "../images/digitize.png";
import centralize from "../images/centralize.png"
import security from "../images/security.png";
import protect from "../images/protect.png";
import { useTranslation } from "react-i18next";
const Billing = () => {

  const { i18n, t } = useTranslation();

  return (
    <div className=" w-full h-auto mt-20 pb-7">
      <div className=" w-full h-auto flex flex-col items-center justify-center">
        <h1 className=" w-1/2 text-center text-black text-6xl font-extrabold items-center">
          {t('Childcare billing made simple')}
        </h1>
        <p className="text-black text-lg w-1/2 text-center">
          {t('Utilize Dote platform for child care payments to streamline billing and ensure timely payment. 90% of preschools claim that dote increases on-time payment from families.')}
        </p>
        <button className="h-12 w-56 mr-5">{t('Schedule a demo')}</button>
      </div>

      <div className="w-full h-auto flex justify-center mt-10">
        <div className=" w-1/2 rounded-2xl border-white shadow-md shadow-rose-200 items-center justify-center flex flex-col p-4">
          <h1 className="text-[#141E3E] text-4xl items-center py-2 font-bold">
            {t('Dote billing and payments for childcare')}
          </h1>
          <p className="h-auto font-semibold text-base text-center px-24">
            {t('Using the same platform you use for communications, admissions, and classroom administration, the early childhood financial  management software makes it simple to send automated bills, accept   online payments, stay on top of your finances, and allow families to safely pay online.')}
          </p>
          <button className="w-80 h-12 bg-transparent text-primary rounded-lg">
            {t('Get started today')}
          </button>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center flex-col">
        <span className=" font-bold text-[#102D47] pt-20 text-4xl">
          {t('Simplify your days')}
        </span>

        <div className="flex flex-row mx-20 mt-5">
          <div className=" w-1/2">
            <div className=" w-full h-auto flex justify-center">
              <img className=" items-center h-86" src={Mockup} alt="mobile" />
            </div>
          </div>
          <div className=" w-full h-auto">
            <ul className=" w-full h-auto ml-20 mt-20">
              <li>
                <div className="flex flex-row">
                  <img className=" w-16 h-16" src={Reduce} alt=""></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      {t('Reduce paperwork')}
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      {t('Offer paperless invoicing and payments, and send receipts via email')}
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row mt-10">
                  <img
                    className=" w-16 h-16"
                    src={Send}
                    alt="Stay Connected"
                  ></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      {t('Automate billing')}
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      {t('Send recurring or one-time invoices and offer auto-pay to eliminate late payments')}
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row mt-10">
                  <img
                    className=" w-16 h-16"
                    src={operate_billing}
                    alt="Digital"
                  ></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      {t('Integrate systems')}
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      {t('Invoice families with the same tool you use for enrollment, attendance, and communication')}
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row mt-10">
                  <img className=" w-16 h-16" src={Offer} alt="Digital"></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      {t('Offer flexibility')}
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      {t('Accept credit card or bank transfer payments and offer auto-pay')}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center flex-col">
        <span className=" font-bold text-[#102D47] pt-20 text-4xl">
          {t('Manage your businesss')}
        </span>
        <img className="py-5 h-1/5" src={invoice_mockup} alt="" />
      </div>

      <div className="grid grid-cols-4 mx-32">
        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={digitize} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
          {t('Digitize your reporting')}
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          {t('Easily run customizable billing and tax reports')}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={centralize} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">{t('Centralize your recordkeeping')}</p>
          <p className=" font-regular text-base mx-5 text-center">
          {t('Manage attendance, billing, and payroll in one place')}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={security} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
          {t('Improve security')}
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          {t('Operate under the highest levels of security and compliance')}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={protect} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
          {t('Protect your business')}
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          {t('Ensure all your data is fully encrypted and integrated safely with your bank')}
          </p>
        </div>


      </div>

    </div>
  );
};

export default Billing;
