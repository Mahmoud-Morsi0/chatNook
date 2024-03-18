/* eslint-disable react/prop-types */
import { MdOutlineEmojiEmotions } from "react-icons/md";
import React, { useState, useEffect } from "react";
import { MdAttachFile } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { IoMdSend } from "react-icons/io";

const ChatFooter = () => {
  const [message, setMessage] = useState("");

  const handelMessageChange = (e) => {
    return setMessage(e.target.value);
  };
  console.log(message);

  return (
    <div className="h-20 text-black flex items-center justify-between pr-10 bg">
      <div className=" w-full flex justify-between items-center">
        <div className="m-auto w-2/12 flex justify-around align-middle text-[#1e7887] text-2xl">
          <MdOutlineEmojiEmotions className="cursor-pointer  hover:text-orange-500 " />{" "}
          {/*Emoj Icon */}
          <MdAttachFile className="cursor-pointer  hover:text-orange-500" />
          {/*file Icon */}
          <SlPicture className=" cursor-pointer  hover:text-orange-500 " />
          {/*pic Icon */}
        </div>
        <div className=" w-2/4">
          <textarea
            className="w-full text-gray-900 border-gray-300 rounded-full min-h-1  text-lg textarea textarea-bordered focus:border-[#1e7887] bg"
            placeholder="Text your Message..."
            rows={1}
            value={message}
            onChange={handelMessageChange}
          ></textarea>
        </div>
        <div className="ms-10 w-2/12 hover:text-black cursor-pointer  text-[#1e7887] text-2xl">
          <IoMdSend />
          {/*sender Icon */}
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
