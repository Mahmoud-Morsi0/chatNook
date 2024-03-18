/* eslint-disable react/prop-types */
import { GrStatusGoodSmall } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import DarkMode from "./DarkMode";

const ChatHeader = ({ getUserProfile, CURRENT_USER }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  const headerStyle = {
    backgroundColor: darkMode ? "#213440" : "#FAFAFA",
    color: darkMode ? "white" : "black",
  };
  return (
    <div
      className="h-20 bg-slate-100 text-black flex items-center justify-between pr-10 "
      id="header"
      style={headerStyle}
    >
      <div className=" w-36  flex justify-between align-middle">
        <div className="chat-image avatar mt-3 ms-5">
          <div className="w-10 rounded-full cursor-pointer">
            <img src={CURRENT_USER.avatar} onClick={getUserProfile} />
          </div>
        </div>
        <div className=" flex flex-col  align-middle">
          <div className=" ms-3 font-semibold text-lg">
            {CURRENT_USER.userName}
          </div>
          <div className="text-xs ms-3">
            <GrStatusGoodSmall className=" text-green-600 inline-block" />
            {CURRENT_USER.status}
          </div>
        </div>
      </div>
      <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default ChatHeader;
