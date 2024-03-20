import { useState } from "react";
import { CHATS } from "../pages/Home/mock";
import { getAllUsers } from "../api/messages";

const Message = () => {
  const [searchValue, setSearchValue] = useState("");
  const handelSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handelChat = async (id) => {
    console.log(id);
    const allUsers = await getAllUsers();
    console.log(allUsers);
  };

  return (
    <div className="container flex flex-col justify-start items-center border-r border-l h-screen bg-gray-100 bg">
      <div className="w-full flex justify-between items-center pe-7 ps-3">
        <div className=" text-gray-500">
          <h1 className=" font-sans my-6 ml-4 color font-bold text-xl ">
            Messages
          </h1>
        </div>
        <div className=" text-gray-600"></div>
      </div>
      <div className="w-full m-auto p-1  h-10 mb-4">
        <input
          type="text"
          name="search"
          id="search"
          placeholder=" Search... "
          className=" rounded-full my-2 py-1 pl-4 ml-4 color pr-20 text-[#1e7881] bg-white bg border  border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1e7881]  sm:text-sm sm:leading-6 bg-gray-100 "
          onChange={handelSearch}
          value={searchValue}
        />
      </div>

      <div className="overflow-y-scroll h-fit p-1 sm:h-screen">
        {CHATS.map((message) => {
          return (
            <div
              key={message.chatId}
              className="p-1 flex justify-center cursor-pointer  "
              onClick={() => handelChat(message.chatId)}
            >
              <div className=" messageage-container flex justify-between h-16 p-2 mb-1 ">
                <div className="img-sec w-24 pt-1">
                  <img
                    src={message.avatar}
                    className={`rounded-full w-12 hover:${""}`}
                    alt=""
                  />
                </div>
                <div className="username-sec flex flex-col align-top justify-between text-start  ">
                  <div className="text-sm font-bold color pb-2 text-gray-600">
                    {message.chatName}
                  </div>
                  <div className="text-zinc-400 text-xs">
                    Not too bad, just trying to catch up on some work. How about
                    you?
                  </div>
                </div>
                <div className="notify-sec flex flex-col color justify-around text-zinc-600">
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
  );
};

export default Message;
