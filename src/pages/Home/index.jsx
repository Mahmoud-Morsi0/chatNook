import UserProfile from "../../components/UserProfile";
import ChatFooter from "../../components/ChatFooter";
import ChatMessage from "../../components/ChatMessage";
import ChatHeader from "../../components/ChatHeader";
import React, { useState, useEffect } from "react";
import DarkMode from "./../../components/DarkMode";

import Message from "../../components/Message";
import { MESSAGE, ALL_USERS } from "./mock";

export default function Home() {
  const date = new Date();
  const datetext = date.getHours() + ":" + date.getMinutes();
  console.log(datetext);
  let [userProfile, setUserProfile] = useState(false);
  const getUserProfile = () => {
    userProfile = !userProfile;
    setUserProfile(userProfile);
    console.log("user profile");
  };

  const CURRENT_USER = {
    avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
    userName: "ChaNook",
    userId: 1,
    status: "Active",
  };

  return (
    <div className="flex justify-center ">
      <div className="md:w-3/12 h-screen max-sm:hidden max-md:w-2/12 md:inline-block">
        {userProfile ? <UserProfile /> : <Message ALL_USERS={ALL_USERS} />}
      </div>
      <div className="md:w-9/12  sm:w-screen   flex flex-col justify-between">
        <div>
          <ChatHeader
            user={MESSAGE}
            CURRENT_USER={CURRENT_USER}
            getUserProfile={getUserProfile}
          />
        </div>
        <div>
          <div>
            <ChatMessage
              key={CURRENT_USER.userId}
              CURRENT_USER={CURRENT_USER}
              message={MESSAGE}
            />
          </div>
          <div>
            <ChatFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
