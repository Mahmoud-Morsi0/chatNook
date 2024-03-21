/* eslint-disable react/prop-types */
import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import StartMessage from "./StartMessage";
// import { RiDeleteBinLine } from "react-icons/ri";

const ChatMessage = ({
  // CURRENT_USER,
  // message,
  // onHover,
  selectedChat,
  allMessages,
}) => {
  return (
    <div className="mb-4 px-3 h-[450px] overflow-y-scroll">
      {selectedChat?.lastMessage ? (
        <>
          {allMessages.map((message) => {
            return (
              <div
                key={message._id}
                className={`chat  ${
                  message.recieverId === message.senderId
                    ? "chat-end"
                    : "chat-start"
                }`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    {message.senderId?
                    <svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="35" height="35"><mask id=":ra:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#:ra:)"><rect width="36" height="36" fill="#cbdcdf"></rect><rect x="0" y="0" width="36" height="36" transform="translate(6 6) rotate(356 18 18) scale(1.2)" fill="#ff8830" rx="6"></rect><g transform="translate(4 1) rotate(6 18 18)"><path d="M13,21 a1,0.75 0 0,0 10,0" fill="#000000"></path><rect x="13" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect><rect x="21" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#000000"></rect></g></g></svg>
                    :<svg viewBox="0 0 36 36" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="80" height="80"><mask id=":r34:" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" rx="72" fill="#FFFFFF"></rect></mask><g mask="url(#:r34:)"><rect width="36" height="36" fill="#07abf5"></rect><rect x="0" y="0" width="36" height="36" transform="translate(3 5) rotate(341 18 18) scale(1.2)" fill="#215f88" rx="36"></rect><g transform="translate(-5 1) rotate(-1 18 18)"><path d="M13,21 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path><rect x="13" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect><rect x="21" y="14" width="1.5" height="2" rx="1" stroke="none" fill="#FFFFFF"></rect></g></g></svg>
                    }
                  </div>
                </div>
                <div
                  className={`chat-bubble  overflow-hidden max-w-xl flex h-10 ps-4 py-4 ${
                    message.recieverId === message.senderId
                      ? " bg-neutral-100  text-black bg"
                      : "bg-[#1e7887] text-white"
                  } `}
                >
                  <div
                    className={`text-xs pb-2 ${
                      message.recieverId === message.senderId
                        ? "text-orange-600"
                        : " text-orange-400"
                    } `}
                  >
                    {message.name}
                  </div>
                  <div
                    className="text-sm :"
                    // onMouseEnter={onHover}
                    // onMouseLeave={onHover}
                  >
                    {message.message}
                    {/* <div className="w-2 ms-auto">
                  {onHover ? (
                    <RiDeleteBinLine className="text-red-800 text-lg hover:text-red-600 mt-1" />
                  ) : (
                    ""
                  )}
                </div> */}
                  </div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-900">
                  {message.status === "bending" ? (
                    <IoCheckmark className="mx-1 inline-block" />
                  ) : (
                    <IoCheckmarkDone className="mx-1 inline-block text-green-600" />
                  )}
                  {message.date}
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <StartMessage showButton={false} />
      )}
    </div>
  );
};

export default ChatMessage;
