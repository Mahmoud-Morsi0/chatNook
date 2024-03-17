// import React from "react";

import UserProfile from "../../components/UserProfile";
import ChatHeader from "../../components/chatHeader";
import ChatFooter from "../../components/chatFooter";
import ChatMessage from "../../components/chatMessage";
import { useState } from "react";
import Message from "../../components/Message";

export default function Home() {

  const date = new Date();
  const datetext = date.getHours() + ":" + date.getMinutes();
  console.log(datetext);
  let [userProfile, setUserProfile] = useState(false);
  const getUserProfile = () => {
    userProfile=!userProfile;
    setUserProfile(userProfile);
    console.log("user profile");
  };
  
  const CURRENT_USER = {
    avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
    userName: "Morsi",
    userId: 1,
    status:'Active'
  };
  const ALL_USERS=[
    {
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      userName: "Emo",
      userId: 1,
      status:'Active'
    },
    {
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      userName: "Nour",
      userId: 2,
      status:'Active'
    },
    {
      avatar: "https://docs.material-tailwind.com/img/face-3.jpg",
      userName: "Merna",
      userId: 3,
      status:'Active'
    },
    {
      avatar: "https://docs.material-tailwind.com/img/face-4.jpg",
      userName: "Abdelrahman",
      userId: 4,
      status:''
    },
    {
      avatar: "https://docs.material-tailwind.com/img/face-5.jpg",
      userName: "Morsi",
      userId: 5,
      status:''
    },
  ]
  const MESSAGE = [
    {
      userId: 2,
      name: "ChatNook",
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      text: "Hello ChatNookHello ChatNookHello ChatNookHello ChatNookHello ChatNookHello",
      date: "21:15",
      status: "bendging",
    },
    {
      userId: 1,
      name: "Morsi",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      text: "Lorem Ipsum is Lorem Ipsum and I am Lorem Ipsum Lorem Ipsum is Lorem Ipsum and I am Lorem Ipsum Lorem Ipsum is Lorem Ipsum and I am Lorem Ipsum ",
      date: "21:15",
      status: "bendging",
    },
    {
      userId: 2,
      name: "ChatNook",
      avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
      text: "Hello Morsi",
      date: "21:15",
      status: "bndging",
    },
    {
      userId: 1,
      name: "Morsi",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      text: "Hello ChatNook",
      date: "21:15",
      status: "bending",
    },
  ];


  return (
    <div className="flex justify-center ">
      <div className="md:w-3/12 h-screen  sm:hidden md:inline-block">
        {userProfile ? 
        <UserProfile /> 
        : <Message 
        ALL_USERS={ALL_USERS}
           />}
      </div>
      <div 
      className="md:w-9/12  sm:w-screen   flex flex-col justify-between"
      >
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
