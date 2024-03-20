/* eslint-disable react/prop-types */
import { MdOutlineEmojiEmotions } from "react-icons/md";
import React, { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import { MdAttachFile } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { IoMdSend } from "react-icons/io";

const ChatFooter = ({ handelMessageChange, message }) => {
  return (
    <div className=" h-16 bg-gray-100 flex items-center bg ">
      <div className=" w-full flex justify-between items-center">
        <div className="m-auto w-2/12 flex justify-around align-middle text-[#1e7887] text-2xl">
          <MdOutlineEmojiEmotions
            className="cursor-pointer  hover:text-orange-500 "
            onClick={toggleEmojiPicker}
          />
          {/*Emoj Icon */}
          <MdAttachFile className="cursor-pointer  hover:text-orange-500" />
          {/*file Icon */}
          <SlPicture className=" cursor-pointer  hover:text-orange-500 " />
          {/*pic Icon */}
        </div>

        <div className=" w-2/4">
          <textarea
            className="w-full text-gray-900 border-gray-300 rounded-full min-h-1 bg-white text-sm textarea textarea-bordered focus:border-[#1e7887] bg "
            placeholder="Text your Message..."
            rows={1}
            value={message}
            onChange={(e) => handleMessageChange(e.target.value)}
          ></textarea>
        </div>
        <div className="ms-10 w-2/12 hover:text-orange-500 cursor-pointer  text-[#1e7887] text-2xl">
          <IoMdSend />
          {/*sender Icon */}
        </div>
      </div>
      {showEmojiPicker && (
        <EmojiPickerComponent onEmojiClick={handleEmojiClick} />
      )}
    </div>
  );
};

export default ChatFooter;
