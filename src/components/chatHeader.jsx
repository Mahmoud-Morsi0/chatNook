/* eslint-disable react/prop-types */
import { GrStatusGoodSmall } from "react-icons/gr";

const ChatHeader = ({ getUserProfile, CURRENT_USER }) => {
  return (
    <div className="h-20 bg-slate-100 text-black">
      <div className=" w-36  flex justify-between align-middle">
        <div className="chat-image avatar mt-3 ms-5">
          <div className="w-10 rounded-full cursor-pointer">
            <img src={CURRENT_USER.avatar} onClick={getUserProfile} />
          </div>
        </div>
        <div className=" flex flex-col justify-center   align-middle">
          <div className=" mt-5 ms-3 font-semibold text-lg">
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