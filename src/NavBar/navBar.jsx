import { NavLink, useLocation } from "react-router-dom";
import {AiOutlineDown} from "react-icons/ai";
import Hamburger from "./Hamburger";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState('arabic');
  const { i18n,t } = useTranslation();

  // const isArabic = selectedLanguage === 'arabic';
  // useEffect(() => {
  //   const navbar = document.querySelector(".navbar");
  //   if (location.pathname === "/sidebar") {
  //     navbar.style.display = "none";
  //   } else {
  //     navbar.style.display = "block";
  //   }
  // }, [location.pathname]);

  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

   <div className=" w-screen p-2 bg-white shadow-lg  fixed top-0 z-50">
<div className="navbar container w-auto relative h-full">

     <div className="flex flex-row mx-10 justify-between h-full w-full" dir={i18n.language === 'ar' ? 'rtl': 'ltr'}>

  <NavLink to="/" className="flex items-center">
  <div className="cursor-pointer w-10 flex items-center flex-row space-x-1">
      <img
           className=" w-5 h-5 mx-1"
           src="https://cdn-icons-png.flaticon.com/512/565/565665.png"
           alt="logo"
         />
         <span className="font-poppins font-semibold text-2xl text-black1 leading-none">
           {t('Dote')}
         </span>
       </div>
  </NavLink>   

       <div className="md:flex space-x-6 hidden items-center">
         
         <div>
         <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2  text-black focus:outline-none border-none font-poppins font-medium text-base leading-none">
                {t('Solutions')}
                <ChevronDownIcon
                  className="mr-1 ml-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/preschool" className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`} >
                        {t('PreSchool & Childcare')}
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to='/Billing'
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {t('Billing & payments')}
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
   </div>

   <div>
         <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2  text-black focus:outline-none border-none font-poppins font-medium text-base leading-none">
                {t('Resources')}
                <ChevronDownIcon
                  className="mr-1 ml-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/eBooks" className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        {t('E-Books')}
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/blog"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {t('Blogs')}
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <NavLink to="/webinar"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        {t('Webinars')}
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
   </div>
       
         <NavLink className="nav-links" to="/pricing">
           <div className=" font-poppins font-medium text-[16px] leading-none py-2">
             {t('Pricing')}
           </div>
         </NavLink>
       
         <div className=" w-0.5 h-auto bg-slate-200 py-5"></div>
         <button className="flex items-center px-4 py-3 bg-blue-500 text-primary bg-primary/10 font-poppins font-medium text-base rounded-md leading-none" onClick={()=>{
          i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
         }}>
         {t('English')}
         <ChevronDownIcon
                  className="-mr-1 ml-0 h-5 w-5"
                  aria-hidden="true"
                />
 </button>
         <button className=" font-poppins font-medium text-base leading-none py-3 px-4">{t('Get a Demo')}</button>
       </div>

       <button
         id="menu-btn"
         className="block md:hidden"
         onClick={handleOpen}
       >
         <Hamburger />
       </button>
     </div>
     {open && (
       <div>
         <div className="absolute bg-red-100 flex flex-col w-full font-bold py-8 space-y-3 self-end drop-shadow-2xl pl-3 lg:hidden">
           <NavLink className="nav-links" to="/">
           <div>
   <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black focus:outline-none border-none">
                Dropdown
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Item 1
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      >
                        Item 2
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
   </div>
           </NavLink>
           <NavLink className="nav-links" to="/">
             Resources
           </NavLink>
           <NavLink className="nav-links" to="/">
             Pricing
           </NavLink>
           <NavLink className="nav-links" to="/">
             Login
           </NavLink>
           <button>English</button>
           <button>Get Demo</button>
         </div>
       </div>
     )}
   </div>
</div>  
  );
};

export default Nav;


{/* <div className=" w-screen p-2 bg-white shadow-lg  fixed top-0 z-50">
<div className="navbar container w-auto relative h-full">
     <div className="flex flex-row mx-10 justify-between h-full w-full">

       <div className="cursor-pointer w-10 flex items-center flex-row space-x-1">
         <img
           className=" w-5 h-5"
           src="https://cdn-icons-png.flaticon.com/512/565/565665.png"
           alt="logo"
         />
         <span className="font-poppins font-semibold text-2xl text-black1 leading-none">
           Dote
         </span>
       </div>

       <div className="md:flex space-x-6 hidden items-center">
         <NavLink className="nav-links" to="/">
           <span className=" font-poppins font-medium text-base">
             Solution
           </span>
         </NavLink>
         <NavLink className="nav-links" to="/resources">
           <span className=" font-poppins font-medium text-base leading-none">
             Resources
           </span>
         </NavLink>
         <NavLink className="nav-links" to="/pricing">
           <span className=" font-poppins font-medium text-base leading-none">
             Pricing
           </span>
         </NavLink>
         <NavLink className="nav-links" to="/login">
           <span className=" font-poppins font-medium text-base leading-none">
             Login
           </span>
         </NavLink>

         <div className=" w-0.5 h-auto bg-slate-200 py-5"></div>
         <button className="flex items-center px-4 py-3 bg-blue-500 text-primary bg-primary/10 font-poppins font-medium text-base rounded-md leading-none">
         ENGLISH
   <AiOutlineDown className="ml-2" />
 </button>
         <button className=" font-poppins font-medium text-base leading-none py-3 px-4">Get a Demo</button>
       </div>

       <button
         id="menu-btn"
         className="block md:hidden"
         onClick={handleOpen}
       >
         <Hamburger />
       </button>
     </div>
     {open && (
       <div>
         <div className="absolute bg-red-100 flex flex-col w-full font-bold py-8 space-y-3 self-end drop-shadow-2xl pl-3 lg:hidden">
           <NavLink className="nav-links" to="/">
             Solution
           </NavLink>
           <NavLink className="nav-links" to="/">
             Resources
           </NavLink>
           <NavLink className="nav-links" to="/">
             Pricing
           </NavLink>
           <NavLink className="nav-links" to="/">
             Login
           </NavLink>
           <button>English</button>
           <button>Get Demo</button>
         </div>
       </div>
     )}
   </div>
</div>  */}
