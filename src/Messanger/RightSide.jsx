import React from "react";
import { FaPhoneAlt, FaVideo, FaRocketchat } from "react-icons/fa";
import Message from "./Message";
import MessageSend from "./MessageSend";

const RightSide = (props) => {


  const {inputHendle,newMessage,sendMessage,message,scrollRef} = props;
  
 
  return (
    <div className=" w-full h-full bg-white">
            <div className=" h-full flex flex-col ">
              <div className="flex flex-row items-center justify-between pl-3 pr-3 border-b border-slate-300">
                <div className=" flex h-14 w-full">
                  <div className=" w-10 h-10 mt-2">
                    <img className=" w-fit h-fit rounded-full" src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="" />
                  </div>
                  <div className=" flex justify-center items-center">
                    <h3 className=" pl-3 font-poppins font-light leading-none">{props.current.full_name}</h3>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <div className=" h-9 w-9 rounded-full bg-slate-200 cursor-pointer flex justify-center items-center">
                    <FaPhoneAlt />
                  </div>

                  <div className="h-9 w-9 rounded-full bg-slate-200 cursor-pointer flex justify-center items-center">
                    <FaVideo />
                  </div>

                  <div className="h-9 w-9 rounded-full bg-slate-200 cursor-pointer flex justify-center items-center">
                    <FaRocketchat />
                  </div>
                </div>
              </div>

     <Message
   scrollRef = {scrollRef}
      message = {message}
     />
     <MessageSend 
inputHendle={inputHendle}
newMessage={newMessage}
sendMessage = {sendMessage}

     />


            </div>
           
          
        </div>
    
  );
};

export default RightSide;
