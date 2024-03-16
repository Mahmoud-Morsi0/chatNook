// import React from "react";

import UserProfile from "../../components/UserProfile";
import ChatHeader from "./../../components/chatHeader";
import ChatFooter from "./../../components/chatFooter";
import ChatMessage from "../../components/chatMessage";
import { useState } from "react";
import Message from "../../components/Message";

export default function Home() {
  const currentUser = {
    avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
    userName: "Morsi",
    userId: 1,
    status:'Active'
  };
  const allUsers=[
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
  const message = [
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
  const date = new Date();
  const datetext = date.getHours() + ":" + date.getMinutes();
  console.log(datetext);
  let [userProfile, setUserProfile] = useState(false);
  const getUserProfile = () => {
    userProfile=!userProfile;
    setUserProfile(userProfile);
    console.log("user profile");
  };

  return (
    <div className="flex justify-center ">
      <div className="w-3/12 h-screen ">
        {userProfile ? 
        <UserProfile /> 
        : <Message 
        allUsers={allUsers}
           />}
      </div>
      <div 
      className=" w-9/12  flex flex-col justify-between"
      >
        <div>
          <ChatHeader 
          currentUser={currentUser}
          getUserProfile={getUserProfile}
           />
        </div>
        <div>
          <div>
            <ChatMessage
              key={currentUser.userId}
              currentUser={currentUser}
              message={message}
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
