import React from "react";
import pdf from "../images/pdf.png";

const Attachment = () => {
  return (
    <div className=" w-full h-full bg-slate-100">
      <div className=" flex flex-row justify-between">
        <span className=" font-poppins font-bold text-2xl text-black1 mx-10 my-10">
          Uploads
        </span>

        <span className=" font-poppins font-semibold text-sm text-primary my-10 mx-10">
          Help center
        </span>
      </div>

   <div className=" w-1/2 py-5 px-2 mx-10 my-10 rounded-lg bg-white shadow flex flex-row">
  <img src={pdf} alt="PDF"/>

  <div className=" flex flex-col w-1/2">
    <span className=" mx-5 font-poppins font-semibold text-base mt-3 leading-none">Daftar-Peserta.pdf</span>
    <span className=" mx-5 font-poppins font-regular text-sm text-black1 leading-none mt-2">117.5 MB</span>

  </div>

  <div className=" w-1/2 flex justify-end mx-2 my-5">

<span className=" font-poppins text-sm text-black1/75">06/12/2022</span>
  </div>
  

   </div>

    </div>
  );
};

export default Attachment;
