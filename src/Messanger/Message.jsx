import React, { useState } from "react";


const Message = ({message,scrollRef}) => {
  console.log(message)
  const [id,setId] = useState("642b1ce1dabd0b41c0d8fd98")
  return (
   <>
     <div className=" h-full flex flex-col p-7 overflow-y-auto hide-scrollbar">

{/* {
 message && message.length > 0 ? message.map(m =>
 m.senderId === id ? <div></div>
 
 ) :<p></p>
} */}

 {/* {
   message && message.length > 0 ? message.map((m,index) =>
   m.senderId === '642b1ce1dabd0b41c0d8fd98' ? <div ref={scrollRef} className=" float-right pt-3">
       <div className="flex flex-col justify-end items-end">
         <p className=" text-end p-2 rounded-lg bg-primary text-white font-poppins text-sm leading-none">
         {m.message.text }
         </p>
         <div className=" text-end pl-1 text-black text-xs font-poppins leading-none mt-1">
       2 Jan 2022
   </div>
       </div>
     </div>

   ) 
 } */}



   

  




   {/* <div className=" float-left">
     <div className="flex  flex-row">
       <img
         className="w-7 h-7"
         src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
         alt=""
       />
       <div className="flex items-start justify-start w-96 ml-2 flex-col">
         <p className=" text-start bg-primary text-white p-2 rounded-lg font-poppins font-regular text-sm leading-none">
           I am Fine thankyou
         </p>
         <div className="text-start pl-1 text-black text-xs font-poppins leading-none mt-1">
           3 Jan 2022
         </div>
       </div>
     </div>
   </div> */}

 </div>
   </>
  );
};

export default Message;
