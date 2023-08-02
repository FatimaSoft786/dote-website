import React from "react";
import Mockup1 from "../images/Mockup1.png";
import Impression  from "../images/impression.png";
import BusyWork from "../images/Busywork.png";
import Operate from "../images/operate.png";
import MockUp from "../images/mockup.png";
import Access from "../images/access.png";
import Profile from "../images/studentProfile.png";
import Staff from "../images/staffProfile.png";
import Hub from "../images/doc_hub.png";
import Permission from "../images/permission.png";
import Users from "../images/users.png";
import Satisfied from "../images/satisfied.png";
import Millions from "../images/million.png";
import Billing from "../images/billing.png"
import Communication from "../images/communication.png";
import Management from "../images/center_management.png"

const centerManagement = () => {
  return (
    <div className=" w-full h-auto">


      <div className=" w-full h-auto flex flex-col items-center justify-center">
        <h1 className=" w-1/2 text-center text-black text-6xl font-extrabold items-center">
          Center administration is simplified.
        </h1>
        <p className="text-black text-lg w-1/2 text-center">
          The #1 childcare center management software to help you simplify
          administrative tasks and save up to 20 hours per month.
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
          Dote center management
          </h1>
          <p className="h-auto font-semibold text-base text-center px-24">
          The complete preschool and childcare administrative software that streamlines your center’s admissions process, record keeping, reporting, and so much more.
          </p>
          <button className="w-80 h-12 bg-transparent text-primary rounded-lg">
            Get started today
          </button>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center flex-col">
        <span className=" font-bold text-[#102D47] pt-20 text-4xl">
        Streamline childcare registration
        </span>

        <div className="flex flex-row mx-20 mt-5">
        <div className=" w-1/2">
          <div className=" w-full h-auto flex justify-center">
            <img className=" items-center h-86" src={Mockup1} alt="mobile" />
          </div>
        </div>
        <div className=" w-full h-auto">
          <ul className=" w-full h-auto ml-20 mt-20">
            <li>
              <div className="flex flex-row">
                <img className=" w-16 h-16" src={Impression} alt=""></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">Make a good first impression</div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Enable families to sign and submit forms online, and stay in touch with those on your waitlist via direct messaging
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img
                  className=" w-16 h-16"
                  src={BusyWork}
                  alt="Stay Connected"
                ></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">
                  Avoid the busywork
                  </div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Customize your admissions process and enable families to create their child’s profile when applying, so their profile is set up at the time of enrollment
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img className=" w-16 h-16" src={Operate} alt="Digital"></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">
                  Operate at capacity
                  </div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  With FTE reporting, see your true enrollment and make informed staffing and enrollment decisions to maximize your revenue
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
        Simple access to child and staff records
        </span>
        <img className="py-5" src={MockUp} alt="" />
      </div>

      <div className="grid grid-cols-3 mx-32">
        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Access} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
          Easy to create and access
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          Bulk upload your roster to create profiles, attach documents to keep on file, and securely access from anywhere using the app
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Profile} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
          Student profiles
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          Record student contact, meal type, billing, and health information, and use it to send parents reminders for upcoming shots per CDC requirements
          </p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Staff} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">Staff profiles</p>
          <p className=" font-regular text-base mx-5 text-center">
          Record your staff's contact and health information, training hours and certifications, room assignments, and assigned permissions
          </p>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center items-center flex-col">
        <span className=" font-bold text-[#102D47] pt-20 text-4xl">
        You can easily scale your programme.
        </span>

        <div className="flex flex-row mx-20 mt-5">
        <div className=" w-1/2">
          <div className=" w-full h-auto flex justify-center">
            <img className=" items-center h-86" src={Mockup1} alt="mobile" />
          </div>
        </div>
        <div className=" w-full h-auto">
          <ul className=" w-full h-auto ml-20 mt-20">
            <li>
              <div className="flex flex-row">
                <img className=" w-16 h-16" src={Impression} alt=""></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">Detailed reporting</div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Quickly run reports based on your student, staff, and program information for internal use or compliance
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img
                  className=" w-16 h-16"
                  src={Hub}
                  alt="Stay Connected"
                ></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">
                  Document hub
                  </div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  Share documents with families and staff, such as handbooks, menus, or event flyers, with specific rooms or the whole program
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex flex-row mt-10">
                <img className=" w-16 h-16" src={Permission} alt="Digital"></img>
                <div className="flex flex-col ml-6">
                  <div className=" font-semibold text-black text-xl">
                  Teacher/staff permissions
                  </div>
                  <div className=" font-regular text-[#141E3E] text-base">
                  As you grow your team, take control and easily assign permissions to each staff based on the access they need for their role
                  </div>
                </div>
              </div>
            </li>

          
          </ul>
        </div>
      </div>
      </div>


      <div className=" w-full h-auto flex flex-col items-center justify-center mt-10">
        <h1 className=" text-center text-black text-6xl font-extrabold items-center">
        The Dote effect is quantifiable.
        </h1>
        <p className="text-black text-lg w-1/2 text-center">
        Get class updates, stay in sync with teachers, and support learning at home.
        </p>
      </div>

      <div className="grid grid-cols-3 mx-32">
        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Users} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
          85% of users
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          would recommend Dote to a friend
          </p>

<button className=" w-60 bg-transparent text-primary">Learn More</button>

        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Satisfied} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">
          100% of parents 
          </p>
          <p className=" font-regular text-base mx-5 text-center">
          are more satisfied with their school experience once Dote  is implemented.
          </p>

          <button className=" w-60 bg-transparent text-primary">Learn More</button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img className=" w-14 h-14 mt-5" src={Millions} alt="Preload" />
          <p className=" font-bold text-black text-lg mt-2">10s of millions</p>
          <p className=" font-regular text-base mx-5 text-center">
          of classroom moments documented and shared each week
          </p>
          <button className=" w-60 bg-transparent text-primary">Learn More</button>
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

export default centerManagement;
