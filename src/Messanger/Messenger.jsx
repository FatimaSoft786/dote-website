import React,{useEffect,useState,useRef} from "react";
import { FaEllipsisH, FaEdit, FaSistrix } from "react-icons/fa";
import ActiveFriends from "./activeFriends";
import Friends from "./Friends";
import { BsFillCircleFill } from "react-icons/bs";
import RightSide from "./RightSide";
import { useDispatch,useSelector } from "react-redux";
import  {getFriends,messageSend,getMessage } from "../Store/actions/messangerAction";

const Messenger = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef();

   const {friends,message} = useSelector(state => state.messanger);

   const [currentfriend, setCurrentFriend] = useState('');

   const [newMessage, setNewMessage] = useState('');

   const inputHendle = (e) => {
       setNewMessage(e.target.value);
  
   }

   
  
   const sendMessage = (e) => {
       e.preventDefault();
   
       const data = {
        senderId: '642b1ce1dabd0b41c0d8fd98',
        senderName : 'Shahzaib',
        receiverId : currentfriend._id,
        message : newMessage ? newMessage : '❤'
   }

   dispatch(messageSend(data));
   setNewMessage('')
  
   }

   useEffect(() => {
    if(friends && friends.length > 0)
    setCurrentFriend(friends[0])
  
},[friends]);


useEffect(() => {
  //  const data = {
  //   senderId: '642b1ce1dabd0b41c0d8fd98',
  //   receiverId: currentfriend._id
  //  }

  dispatch(getMessage(currentfriend._id));

},[currentfriend?._id]);

 


useEffect(()=>{
   dispatch(getFriends());
},[]);

  return (
    <div className=" w-full h-full ">
      <div className=" h-full flex flex-row">
        <div className=" w-3/12 h-full">
          <div className=" p-5 flex flex-col h-full justify-start border-r border-slate-300">
            <div className=" flex flex-row items-center justify-between ml-0 mr-2">
              <div className=" flex cursor-pointer">
                <div className=" w-10 h-10">
                  <img
                    className=" rounded-full"
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt=""
                  />
                </div>
                <div className=" flex justify-center items-center">
                  <h3 className=" font-poppins font-semibold text-black pl-2">
                    {" "}
                    Hi Ariyan{" "}
                  </h3>
                </div>
              </div>

              <div className=" flex flex-row">
                <div className=" w-8 h-8 flex justify-center items-center ml-2 cursor-pointer rounded-full bg-slate-100">
                  <FaEllipsisH />
                </div>
                <div className="w-8 h-8 flex justify-center items-center ml-2 cursor-pointer rounded-full bg-slate-100">
                  <FaEdit />
                </div>
              </div>
            </div>

            <div className=" pt-5 pr-2">
              <div className=" flex w-full h-10 bg-slate-100 rounded-full ml-0">
                <button className=" p-3 text-xl bg-transparent text-black border-none font-poppins leading-none">
                  {" "}
                  <FaSistrix />{" "}
                </button>
                <input
                  type="text"
                  placeholder="Search"
                  className=" bg-transparent outline-none placeholder-black"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center mt-3">
                <BsFillCircleFill className=" w-3 h-3 text-green" />
                <i className="fas fa-circle text-green-500 mr-2"></i>
                <p className="text-lg font-bold font-poppins">Online</p>
              </div>

              <ActiveFriends />
            </div>
            <div className=" flex flex-col bg-white h-auto hide-scrollbar">

{
  friends && friends.length>0 ? friends.map((fd)=>
              
  <div className={currentfriend._id === fd._id ? 'active: bg-slate-100' :'cursor-pointer hover:bg-slate-50'} onClick={()=> setCurrentFriend(fd)}> 

  <div className=' flex w-full pl-2 pr-4 my-3'>
              <div className='friend-image'>
                   <div className=' mr-2 relative'>
                   <img className=" w-10 h-10 border rounded-full" src='https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png' alt='' />
                   </div>
              </div>
              <div className='friend-name-seen'>
                   <div className=' flex flex-col justify-start items-start'>
                        <h4 className=" font-poppins font-regular text-lg text-black mt-2">{fd.full_name}</h4>
                   </div>
              </div>
         </div>

                {/* <Friends friend={fd} /> */}
              </div>): "No Friends"
}
     
            </div>
          </div>
        </div>

   

     {
      
      currentfriend ? <RightSide 
      current={currentfriend}
       inputHendle={inputHendle}
       newMessage={newMessage}
       sendMessage={sendMessage}
       message={message}
       scrollRef = {scrollRef}
      /> : 'Please Select your Friend'

      
     }
       
    

      </div>
    </div>
  );
};
export default Messenger;


