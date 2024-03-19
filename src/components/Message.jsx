// import React from 'react'
import Logo from "./Logo";
import { IoIosContacts } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { CHATS } from "../pages/Home/mock";
const Message = () => {
  const [searchValue, setSearchValue] = useState("");
  const handelSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };
  const handelChat = (id) => {
    console.log(id);
  };
  return (
    <>
      <div className="container flex flex-col justify-start border border-[#1e77872c] h-screen p-3">
        <div className=" ">
          <Logo />
        </div>

        <div className="w-full m-auto p-1 h-10 mb-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder=" Search... "
            className=" rounded-full my-2 py-1 pl-4 pr-20 text-[#1e7881] focus:outline-none focus:ring-1 focus:ring-[#1e7881] placeholder:text-[#1e7881] sm:text-sm sm:leading-6 bg-gray-100 "
            onChange={handelSearch}
            value={searchValue}
          />
        </div>
        <div className="bg-[#1e7881] w-4/6 m-auto p-1 border border-white rounded-full flex justify-around items-center ">
          <div className="w-6 h-6 border border-white rounded-full flex justify-center items-center cursor-pointer  hover:border-orange-500 ">
            <IoIosContacts className=" text-white text-2xl  hover:text-orange-500" />
          </div>
          <div className="w-6 h-6 border border-white rounded-full flex justify-center items-center cursor-pointer p-1  hover:border-orange-500">
            <IoChatbubblesOutline className=" text-white text-2xl  hover:text-orange-500" />
          </div>
        </div>

        <div className="overflow-y-scroll h-fit p-1">
          {CHATS.map((mess) => {
            return (
              <div
                key={mess.chatId}
                className="p-1 flex justify-center cursor-pointer "
                onClick={() => handelChat(mess.chatId)}
              >
                <div className=" message-container flex justify-between h-16 p-2 mb-1 ">
                  <div className="img-sec w-24 pt-1">
                    <img
                      src={mess.avatar}
                      className={`rounded-full w-12 hover:${""}`}
                      alt=""
                    />
                  </div>
                  <div className="username-sec flex flex-col align-top justify-between text-start  ">
                    <div className="text-sm font-bold text-gray-600">
                      {mess.chatName}
                    </div>
                    <div className="text-zinc-400 text-xs">
                      Not too bad, just trying to catch up on some work. How
                      about you?
                    </div>
                  </div>
                  <div className="notify-sec flex flex-col justify-around text-zinc-600">
                    <div>5s</div>
                    <div className="rounded-full w-4 h-4 text-xs text-white align-middle text-center bg-teal-700">
                      1
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Message;
