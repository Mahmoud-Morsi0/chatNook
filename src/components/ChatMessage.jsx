/* eslint-disable react/prop-types */
import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import StartMessage from "./StartMessage";
// import { RiDeleteBinLine } from "react-icons/ri";

const ChatMessage = ({
  CURRENT_USER,
  message,
  onHover,
  selectedChat,
  allMessages,
}) => {
  return (
    <div className="mb-4 px-3 overflow-y-scroll">
      {selectedChat?.lastMessage ? (
        <>
          {allMessages.map((message) => {
            return (
              <div
                key={message._id}
                className={`chat  ${
                  message.userId === CURRENT_USER.userId
                    ? "chat-end"
                    : "chat-start"
                }`}
              >
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src={message.avatar} />
                  </div>
                </div>
                <div
                  className={`chat-bubble max-w-xl h-20 ps-4 py-4 ${
                    message.userId === CURRENT_USER.userId
                      ? " bg-neutral-100  text-black bg"
                      : "bg-[#1e7887] text-white"
                  } `}
                >
                  <div
                    className={`text-xs pb-2 ${
                      message.userId === CURRENT_USER.userId
                        ? "text-orange-600"
                        : " text-orange-400"
                    } `}
                  >
                    {message.name}
                  </div>
                  <div
                    className="text-xs"
                    // onMouseEnter={onHover}
                    // onMouseLeave={onHover}
                  >
                    {message.text}
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
