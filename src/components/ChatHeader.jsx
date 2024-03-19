/* eslint-disable react/prop-types */
import { GrStatusGoodSmall } from "react-icons/gr";

const ChatHeader = ({ getUserProfile, CURRENT_USER }) => {
  return (
    <div className="h-16 bg-slate-100 text-gray-800 flex justify-between items-center p-5">
      <div className=" w-32 flex justify-between items-start align-middle">
        <div className="chat-image avatar self-start ">
          <div className="w-10 rounded-full cursor-pointer">
            <img src={CURRENT_USER.avatar} onClick={getUserProfile} />
          </div>
        </div>
        <div className=" ">
          <div className=" font-semibold text-lg">
            {CURRENT_USER.userName}
          </div>
          <div className="text-xs ms-3">
            <GrStatusGoodSmall className=" text-green-600 inline-block" />
            {CURRENT_USER.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
