import React, { useEffect } from "react";

const Friends = (props) => {

   
 const {fndInfo} = props.friend;

console.log(fndInfo);

    return (
         <div className=' flex w-full pl-2 pr-4 my-3'>
              <div className='friend-image'>
                   <div className=' mr-2 relative'>
                   <img className=" w-10 h-10 border rounded-full" src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' alt='' />
                   </div>
              </div>
  
              <div className='friend-name-seen'>
                   <div className=' flex flex-col justify-start items-start'>
                        <h4 className=" font-poppins font-regular text-lg text-black mt-2">{fndInfo}</h4>
                   </div>
  
              </div>
  
         </div>
    )
  };
  
  export default Friends;