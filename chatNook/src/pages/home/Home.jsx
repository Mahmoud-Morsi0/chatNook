import React from "react";

import UserProfile from './../../components/UserProfile/UserProfile';
import ChatHeader from './../../components/chatHeader';
import ChatFooter from './../../components/chatFooter';
import Message from "../../components/chatMessage";

export default function Home() {
  return (
    <>
      <div className="flex justify-center ">
        <div className=" ">
          <UserProfile/>
        </div>
        <div className=" w-10/12 flex flex-col justify-between">
          <div>
            <ChatHeader/>
          </div>
          <div>
          <div ><Message/></div>
          <div><ChatFooter/></div>
          </div>
          
        </div>
      </div>
    </>
  );
}
