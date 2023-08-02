import React from "react";
import MockUp from "../images/mockup.png";
import Message from "../images/message.png";
import Direct from "../images/direct_message.png";
import Centralized from "../images/centralized.png";
import Send from "../images/send.png";
import Mic from "../images/mic.png";
import Impression from "../images/impression.png";
import Mobile from "../images/mobile.png";
import Need from "../images/need.png";
import Available from "../images/available.png";
import Scale from "../images/scale.png";
import Billing from "../images/billing.png";
import Communicate from "../images/communication.png";
import Management from "../images/center_management.png";
const Communication = () => {
  return (
    <div className=" w-full h-auto">
      <div className=" w-full h-auto flex flex-col items-center justify-center">
        <h1 className=" w-1/2 text-center text-black text-6xl font-extrabold items-center">
          Excellent relationships with families and staff
        </h1>
        <p className="text-black text-lg w-1/2 text-center">
          Dote’s childcare app enables families, staff, and administrators to
          easily communicate with each other, build deeper relationships and
          ensure important updates are seen.
        </p>
        <div className=" w-auto h-auto flex flex-row">
          <button className="h-12 w-56 mr-5">Schedule a demo</button>
          <button className="h-12 w-56  bg-transparent text-primary rounded-lg text-xs">
            Signup for free
          </button>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center mt-10">
        <div className=" w-1/2 rounded-2xl border-white shadow-md shadow-rose-200 items-center justify-center flex flex-col p-4">
          <h1 className="text-[#141E3E] text-4xl items-center py-2 font-bold">
            Dote communication app
          </h1>
          <p className="h-auto font-semibold text-base text-center px-24">
            The #1 childcare software that enables you to centralize and send
            real-time messages, emergency alerts, and newsletters all from the
            same platform you use for billing, admissions, and classroom
            management. 95% of administrators and staff report dote improves
            parent communication.
          </p>
          <button className="w-80 h-12 bg-transparent text-primary rounded-lg">
            Get started today
          </button>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center flex-col">
        <span className=" font-bold text-[#102D47] pt-20 text-4xl">
          Simplify parental involvement
        </span>
        <img className="py-5" src={MockUp} alt="" />
      </div>

      <div className="grid grid-cols-3 mx-32">
        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Message} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
            Real-time messaging
          </p>
          <p className=" font-regular text-base mx-5 text-center">
            Keep an open line of communication between you, your staff, and your
            parents
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Direct} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">Direct messaging</p>
          <p className=" font-regular text-base mx-5 text-center">
            For sensitive or private subjects, message parents directly without
            any staff involved
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Centralized} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
            Centralize communications
          </p>
          <p className=" font-regular text-base mx-5 text-center">
            Reduce the number of apps for parents and message them directly from
            the dote parent app, including prospective families, so they don’t
            miss updates!
          </p>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center flex-col">
        <span className=" font-bold text-[#102D47] pt-20 text-4xl">
          Staff communication is now easier.
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
                  <img className=" w-16 h-16" src={Impression} alt=""></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      Quick and easy to use
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      Give staff an easy tool to message parents directly and
                      share their children’s progress
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
                      Ongoing appreciation
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      Help staff build stronger relationships with families
                      using dote teacher parent communication app
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row mt-10">
                  <img
                    className=" w-16 h-16"
                    src={Mic}
                    alt="Real-time support"
                  ></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      Operate at capacity
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      Message staff individually or as a team, respond to
                      questions instantly, and foster a sense of community
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
          The all-inclusive communication platform
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
                  <img className=" w-16 h-16" src={Need} alt=""></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      Based on your needs
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      Send messages with or without attachments, reminders, SMS
                      alerts, announcements, or newsletters from dote’s
                      childcare app.
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row mt-10">
                  <img
                    className=" w-16 h-16"
                    src={Available}
                    alt="Stay Connected"
                  ></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      Available anywhere
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      Securely communicate with staff and maintain parent
                      engagement from the dote mobile app or web.
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-row mt-10">
                  <img
                    className=" w-16 h-16"
                    src={Scale}
                    alt="Real-time support"
                  ></img>
                  <div className="flex flex-col ml-6">
                    <div className=" font-semibold text-black text-xl">
                      Easy to scale
                    </div>
                    <div className=" font-regular text-[#141E3E] text-base">
                      Easily communicate with an individual student's parent, a
                      group of parents, a whole classroom, or the entire
                      program.
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
            Send automated invoices, accept online payments, and get paid on
            time. 90% of preschools report that more families pay on time with
            dote.
          </p>

          <button className=" w-60 bg-transparent text-primary">
            Learn More
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Communicate} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">Communication</p>
          <p className=" font-regular text-base mx-5 text-center">
            Build quality connections with families and staff. 95% of
            administrators & staff report dote improves communication with
            families.
          </p>

          <button className=" w-60 bg-transparent text-primary">
            Learn More
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Management} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
            Center management
          </p>
          <p className=" font-regular text-base mx-5 text-center">
            Simplify administrative tasks with dote all-in-one app & save up to
            20 hours per month
          </p>
          <button className=" w-60 bg-transparent text-primary">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-auto py-24">
        <label className=" font-extrabold text-4xl text-black">
          Join millions of educators and families on dote
        </label>
        <label className=" font-medium text-base text-[#141E3E]">
          Take a tour and see how Dote can help you, your staff, and your
          families.
        </label>
        <button className="w-80 h-12 pt-1">Schedule a demo</button>
      </div>
    </div>
  );
};

export default Communication;
