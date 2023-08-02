import React from "react";
import enrollment from "../images/enrollment_engagement.png";
import records from "../images/records.png";
import reporting from "../images/reporting.png";
import site from "../images/multi_site.png";
import approval from "../images/approval.png";
import payroll from "../images/staff_payroll.png";
import { useTranslation } from "react-i18next";

const CenterManagement = () => {

  const { i18n, t } = useTranslation();

  return (
    <div className=" w-full h-auto mt-10">
      <div className=" shadow-2xl shadow-rose-300 rounded-lg">
        <div className=" grid grid-cols-3 gap-28">
          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={enrollment} alt="" />
            <hi className=" font-semibold font-poppins text-black1 text-base mt-8">
            {t('Enrollment management')}
            </hi>
            <p className=" font-regular font-poppins  text-black1 mt-3 w-60 h-auto">
           {t('Create forms, request documents and e-signatures, and make enrollment and waitlist decisions with ease')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={records} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            {t('Online records')}
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            {t('Access student, family, and staff records anytime and from anywhere')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={reporting} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            {t('Detailed reporting')}
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            {t('Access all school, classroom, and billing details, as well as CACFP reports to meet reimbursement criteria')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={site} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            {t('Multi-site management')}
            </hi>
            <p className=" font-regular font-poppins text-black1 mt-3 w-60 h-auto">
            {t('Allow designated users to access each site’s dote instance from a single login')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={approval} alt="" />
            <hi className=" font-semibold font-poppins text-black text-base mt-8">
            {t('Administrator approvals')}
            </hi>
            <p className=" font-regular text-black1 font-poppins mt-3 w-60 h-auto">
            {t('Assign different levels of access for staff members')}
            </p>
          </div>

          <div className=" flex flex-col justify-start ml-28 mt-10">
            <img className=" w-16 h-16" src={payroll} alt="" />
            <hi className=" font-semibold text-black text-base mt-8">
            {t('Staff payroll reports')}
            </hi>
            <p className=" font-regular text-black1 font-poppins mt-3 w-60 h-auto">
            {t('Easily track the total number of hours worked for timecards using staff check-in')}
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

export default CenterManagement;