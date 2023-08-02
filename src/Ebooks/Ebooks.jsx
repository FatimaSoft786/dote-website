import React from "react";
import Cover from "../images/bookCover.png";
import { useTranslation } from 'react-i18next';
import Footer from "../HomeSection/Footer";
const Ebooks = () => {

  const { i18n,t } = useTranslation();

  return (
    <div className=" w-full h-auto mt-20">
      <div className=" w-full h-auto flex flex-col items-center justify-center">
        <h1 className=" w-1/2 text-center text-black text-6xl font-extrabold items-center">
          {t('Dote E-Books')}
        </h1>
        <p className="text-black text-lg w-1/2 text-center">
          {t('Build your knowledge and help your childcare center succeed with these in-depth guides.')}
        </p>

        <div className=" w-1/2 h-14 border-white bg-white shadow-md shadow-rose-300  border rounded-lg mt-5">
          <div className="flex items-center h-full" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>
            <input
              type="text"
              placeholder={t('Search for any book')}
              className="w-full h-full border rounded-lg border-white focus:outline-none focus:ring-0 leading-none px-2"
            />
           <button className="bg-primary text-white rounded-lg hover:bg-primary hover:text-primary hover:bg-transparent w-1/4 h-full py-0">
              {t('Search')}
            </button>
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3 mx-40 my-10">
        <div className="rounded-2xl border flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2r px-2 text-center">
            {t('The Parent Communication Toolkit: How to Wow Families This School Year with Dote')}
          </p>

          <p className=" font-regular text-base mx-5 text-center">
             {t('Using anecdotal records is one way to document observations of children in your classroom. Anecdotal records must be factual')}
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            {t('Get this book')}
          </button>
        </div>

        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2 text-center"> 
          {t('Using anecdotal records is one way to document observations of children in your classroom. Anecdotal records must be factual')}
            </p>

          <p className=" font-regular text-base mx-5 text-center">
          {t('Using anecdotal records is one way to document observations of children in your classroom. Anecdotal records must be factual')}
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
          {t('Get this book')}
          </button>
        </div>

        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2 text-center">
          {t('Using anecdotal records is one way to document observations of children in your classroom. Anecdotal records must be factual')}
          </p>

          <p className=" font-regular text-base mx-5 text-center">
          {t('Using anecdotal records is one way to document observations of children in your classroom. Anecdotal records must be factual')}
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
          {t('Get this book')}
          </button>
        </div>


        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10 mt-5">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">
            {t('No training required')}
          </p>

          <p className=" font-regular text-base mx-5 text-center">
          {t('Using anecdotal records is one way to document observations of children in your classroom. Anecdotal records must be factual')}
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
          {t('Get this book')}
          </button>
        </div>


        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10 mt-5">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">
            {t('No training required')}
          </p>

          <p className=" font-regular text-base mx-5 text-center">
         {t('No training required')}
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            {t('Get this book')}
          </button>
        </div>


        <div className=" rounded-lg border flex flex-col items-center justify-center py-5 mx-10 mt-5">
          <img className=" w-40 h-40 mt-5" src={Cover} alt="award" />

          <p className=" font-bold text-black text-lg mt-2">
            {t('No training required')}
          </p>

          <p className=" font-regular text-base mx-5 text-center">
            {t('Get set up in minutes. No training required. Powerful, yet simple and easy to use.')}
          </p>

          <button className=" w-3/4 bg-transparent text-primary">
            {t('Get this book')}
          </button>
        </div>


      </div>

      <Footer/>
    </div>
  );
};

export default Ebooks;
