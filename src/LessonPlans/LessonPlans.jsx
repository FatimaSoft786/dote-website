import React from "react";
import MockUp from "../images/mockup.png";
import PreLoaded from "../images/pre_loaded.png";
import Customized from "../images/customized.png";
import Lesson from "../images/lesson_plan.png";
import Mobile from "../images/mobile.png";
import Photo from "../images/media_rich.png";
import Assesment from "../images/assesment.png";
import Sharing from "../images/sharing.png";
import DataRich from "../images/data_rich.png";
import Print from "../images/print.png";
import Billing from "../images/billing.png"
import Communication from "../images/communication.png";
import Management from "../images/center_management.png"

const LessonPlans = () => {
  return (
    <div className=" w-full h-auto">
      <div className="w-full h-auto flex flex-col items-center justify-center mt-10">
        <label className=" font-extrabold text-6xl text-black">
          Easier lesson planning
        </label>
        <label className=" w-1/2 font-medium text-base">
          Use Dote to create lesson plans for your preschool or daycare. You and
          your staff will save more time and stay more organized. And your
          families will be better connected to their children’s learning.
        </label>
        <button className="w-80 h-12">Watch the video</button>
      </div>

      <div className="w-full h-auto flex justify-center mt-10">
        <div className=" w-1/2 rounded-2xl border-white shadow-md shadow-rose-200 items-center justify-center flex flex-col p-4">
          <h1 className="text-[#141E3E] text-4xl items-center py-2 font-bold">
            Dote early childhood curriculum
          </h1>
          <p className="h-auto font-semibold text-base text-center px-24">
            The #1 childcare software that enables you and your staff to create
            custom child care lesson plans and curriculum, log observations in
            accordance with your state’s early learning standards, and share
            progress with parents–all from the same platform you use for
            billing, communications, and classroom management.
          </p>
          <button className="w-80 h-12 bg-transparent text-primary rounded-lg">
            Get started today
          </button>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center flex-col">
        <span className=" font-bold text-[#102D47] pt-20 text-4xl">
          Standards & lessons
        </span>
        <img className="py-5" src={MockUp} alt="" />
      </div>

      <div className="grid grid-cols-3 mx-32">
        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={PreLoaded} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
            Award winning support
          </p>
          <p className=" font-regular text-base mx-5 text-center">
            Our world class customer support is here for you, including many
            former educators and early childhood professionals.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Customized} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
            Customized standards
          </p>
          <p className=" font-regular text-base mx-5 text-center">
            Customize your learning standards to meet the needs of your school's
            development framework
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Lesson} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">Lesson planning</p>
          <p className=" font-regular text-base mx-5 text-center">
            Use lesson plans to help your teachers plan for their students’
            success
          </p>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center flex-col">
        <span className=" font-bold text-[#102D47] pt-20 text-4xl">
        Observations & assessments
        </span>

        <div className="flex flex-row mx-20 mt-5">
        <div className=" w-1/2">
          <div className=" w-full h-auto flex justify-center">
            <img className=" items-center h-86" src={Mobile} alt="mobile" />
          </div>
        </div>
        <div className=" w-full h-auto">
          <ul className=" w-full h-auto ml-20 mt-20">
            <li>
              <div className="flex flex-row">
                <img className=" w-16 h-16" src={Photo} alt=""></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">  Media rich assessments</div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Offer paperless invoicing and payments, and send receipts via email
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img
                  className=" w-16 h-16"
                  src={Assesment}
                  alt="Stay Connected"
                ></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">
                  Student & class assessments
                  </div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Create assessments by class or by student based on milestone or lesson progress
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img className=" w-16 h-16" src={Sharing} alt="Digital"></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">
                  Sharing controls
                  </div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Share learning and development with staff and parents on your own schedule
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
        Progress Reports
        </span>

        <div className="flex flex-row mx-20 mt-5">
        <div className=" w-1/2">
          <div className=" w-full h-auto flex justify-center">
            <img className=" items-center h-86" src={Mobile} alt="mobile" />
          </div>
        </div>
        <div className=" w-full h-auto">
          <ul className=" w-full h-auto ml-20 mt-20">
            <li>
              <div className="flex flex-row">
                <img className=" w-16 h-16" src={DataRich} alt=""></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">Data rich reports</div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Track and analyze student or classroom progress with data-rich reports
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img
                  className=" w-16 h-16"
                  src={Print}
                  alt="Stay Connected"
                ></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">
                  Printable & sharable reports
                  </div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Create printable and shareable student progress reports and include photos, videos, and more
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
      moreover, there are multiple other helpful features, such as:
        </span>
      </div>


      <div className="grid grid-cols-3 mx-32">
        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Billing} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
          Billing & payments
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          Send automated invoices, accept online payments, and get paid on time. 90% of preschools report that more families pay on time with dote.
          </p>

<button className=" w-60 bg-transparent text-primary">Learn More</button>

        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Communication} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
            Communication
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          Build quality connections with families and staff. 95% of administrators & staff report dote improves communication with families.
          </p>

          <button className=" w-60 bg-transparent text-primary">Learn More</button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Management} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">Center management</p>
          <p className=" font-regular text-base mx-5 text-center">
          Simplify administrative tasks with dote all-in-one app & save up to 20 hours per month
          </p>
          <button className=" w-60 bg-transparent text-primary">Learn More</button>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center h-auto py-24">
        <label className=" font-extrabold text-4xl text-black">
        Join millions of educators and families on dote
        </label>
        <label className=" font-medium text-base text-[#141E3E]">
        Take a tour and see how Dote can help you, your staff, and your families.
        </label>
        <button className="w-80 h-12 pt-1">Schedule a demo</button>
      </div>



    </div>
  );
};

export default LessonPlans;
