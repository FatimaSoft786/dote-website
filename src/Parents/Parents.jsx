import React, { useState } from "react";
import Colors from "../images/colors.png";
import Mobile from "../images/mobile.png";
import Photo from "../images/photo.png";
import Stay from "../images/stay.png";
import Digital from "../images/digital.png";
import Paperless from "../images/paperless.png";
import Community from "../images/community.png";
import Footer from "../HomeSection/Footer";

const Parents = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="w-full h-auto">
      <div className="flex flex-col items-center justify-center h-auto mt-9">
        <label className=" font-extrabold font-poppins text-6xl text-black mt-20">
          The day of your child in real time
        </label>
        <label className=" font-medium font-poppins text-base mt-2">
          Easy and intuitive school communication. Invite your school
        </label>
        <button className="w-80 h-12 mt-3 font-poppins font-medium text-sm">Invite your school</button>
      </div>
      <img className=" h-80 w-full resize-none" src={Colors} alt=""></img>

   
      <div className="w-auto h-auto mx-24 mt-10 font-poppins font-bold text-4xl">
        Daily Updates
      </div>
      <div className="w-auto h-auto font-poppins mx-24 font-regular text-sm">
        Real-time feed of activities throughout the day.
      </div>
      <div className="flex flex-row mx-20 mt-5">
        <div className=" w-1/2">
          <div className=" w-full h-auto flex justify-center">
            <img className=" items-center h-86" src={Mobile} alt="mobile" />
          </div>
        </div>
        <div className=" w-full h-auto">
          <ul className=" w-full h-auto ml-20 mt-16">
            <li>
              <div className="flex flex-row">
                <img className=" w-16 h-16" src={Photo} alt=""></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-poppins font-semibold text-black text-xl">Photo</div>
                  <div className=" font-poppins font-regular text-[#141E3E] text-base">
                    Watch your child’s day unfold with snapshots delivered to
                    your mobile device.
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img
                  className=" w-16 h-16"
                  src={Stay}
                  alt="Stay Connected"
                ></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-poppins font-semibold text-black text-xl">
                    Stay Connected
                  </div>
                  <div className=" font-poppins font-regular text-[#141E3E] text-base">
                    Stay in touch with your teacher and strengthen school
                    learning with activities at home.
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img className=" w-16 h-16" src={Digital} alt="Digital"></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-poppins font-semibold text-black text-xl">
                    Digital check-in
                  </div>
                  <div className=" font-poppins font-regular text-[#141E3E] text-base">
                    Easy digital check-in with personal passcodes. Add approved
                    adults to pick up your child, and see when your child is
                    checked in or out.
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img
                  className=" w-16 h-16"
                  src={Paperless}
                  alt="Paperless"
                ></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-poppins font-semibold text-black text-xl">
                    Paperless billing
                  </div>
                  <div className=" font-poppins font-regular text-[#141E3E] text-base">
                    Digital payments directly from your bank account or
                    credit/debit card. Paperless invoices and email receipts.
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img
                  className=" w-16 h-16"
                  src={Community}
                  alt="Community"
                ></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-poppins font-semibold text-black text-xl">
                    Your child's community
                  </div>
                  <div className=" font-poppins font-regular text-[#141E3E] text-base">
                    Invite grandparents, nannies, and friends – with control
                    over what they can do and see on dote.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-auto h-auto mx-24 rounded-lg border border-white shadow-2xl shadow-rose-300 py-8 px-14 flex flex-col">
        <span className=" text-black font-extrabold text-4xl">
          Invite your preschool or child care
        </span>
        <span className=" text-black1 font-poppins font-semibold text-base">
          If your center is not yet using dote, we'll get in touch
        </span>
        <div className="mt-2 flex  flex-row ">
          <input
            type="owner"
            name="name"
            class="w-1/2 h-14 mt-1 px-3 py-2 bg-white border border-white shadow-lg shadow-rose-300 placeholder-black1 focus:outline-none focus:border-[#FB2E01] font-poppins  block rounded-md sm:text-sm mr-12"
            placeholder="Your child's center name"
          />
          <input
            type="owner"
            name="name"
            class="w-1/2 h-14 mt-1 px-3 py-2 bg-white border-white border shadow-lg shadow-rose-300 placeholder-[#141E3E] focus:outline-none focus:border-[#FB2E01] font-poppins  block rounded-md sm:text-sm "
            placeholder="Center’s director name"
          />
        </div>
        <div className=" mt-4 flex  flex-row">
          <input
            type="owner"
            name="name"
            class="w-1/2 h-14 mt-1 px-3 py-2 bg-white border border-white shadow-lg shadow-rose-300 placeholder-[#141E3E] focus:outline-none focus:border-[#FB2E01] font-poppins  block rounded-md sm:text-sm mr-12"
            placeholder="The center's email"
          />
          <input
            type="owner"
            name="name"
            class="w-1/2 h-14 mt-1 px-3 py-2 bg-white border-white border shadow-lg shadow-rose-300 placeholder-[#141E3E] focus:outline-none focus:border-[#FB2E01]  font-poppins block rounded-md sm:text-sm "
            placeholder="The direcrtor email"
          />
        </div>
        <div className=" mt-4 flex flex-row">
          <input
            type="owner"
            name="name"
            class="w-1/2 h-14 mt-1 px-3 py-2 bg-white border border-white shadow-lg shadow-rose-300 placeholder-[#141E3E] focus:outline-none focus:border-[#FB2E01] font-poppins  block rounded-md sm:text-sm mr-12"
            placeholder="Number of students enrolled"
          />
          <div className=" w-1/2 h-14"></div>
        </div>
        <div className=" mt-4 flex flex-row">
          <button className=" font-poppins w-1/2 h-14 mr-12 mt-2">Send Now</button>
          <div className=" w-1/2 h-14"></div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-auto py-24">
        <label className=" font-poppins font-extrabold text-4xl text-black">
        Interested in using Dote at home?
        </label>
        <label className=" font-poppins font-medium text-base text-[#141E3E]">
        See tips & tricks for using Dote with at home childcare.
        </label>
        <button className="w-80 h-12 pt-1 mt-3">Nannies & childcare</button>
      </div>

      <Footer/>
    </div>
  );
};

export default Parents;
