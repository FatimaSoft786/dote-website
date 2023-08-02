import React from "react";

import {
  FaPlusCircle,
  FaFileImage,
  FaPaperPlane,
} from "react-icons/fa";

import { BsFillEmojiFrownFill } from "react-icons/bs";

const MessageSend = ({inputHendle,newMessage,sendMessage}) => {
  const emojis = [
    "😀",
    "",
    "😄",
    "😁",
    "😆",
    "",
    "😂",
    "🤣",
    "😊",
    "",
    "🙂",
    "🙃",
    "😉",
    "",
    "😍",
    "😝",
    "😜",
    "🧐",
    "🤓",
    "😎",
    "😕",
    "🤑",
    "🥴",
    "😱",
  ];

  return (
    <div className=" flex flex-row relative justify-between items-center p-1">
   

      <div>
        <FaPlusCircle className=" w-5 h-5" />
      </div>

      <div>
        <FaFileImage className=" w-5 h-5" />
      </div>

      <div>
        <BsFillEmojiFrownFill className=" w-5 h-5" />
      </div>

      <div className=" flex w-10/12 h-10 bg-slate-100 rounded-full border-none items-center">
        <input
          type="text"
          name="message"
          id="message"
          value={newMessage}
          onChange={inputHendle}
          placeholder="Aa"
          className=" w-full bg-transparent placeholder-black text-xl mr-1 cursor-pointer outline-none px-4 leading-none"
        />

        {/* <div className="flex p-2 text-xl cursor-pointer text-black relative">
          <label htmlFor="emoji">
            {" "}
            <FaPaperPlane />{" "}
          </label>
        </div> */}
      </div>

      <div onClick={sendMessage}>
      <FaPaperPlane />
      </div>

      <div className=" w-52 bg-[#0e131d] absolute right-16 p-1 bottom-16 rounded-lg hidden">
        <div className=" grid grid-cols-7 gap-1">
          {emojis.map((e) => (
            <span className=" cursor-pointer">{e}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageSend;
