import UserProfile from "../../components/UserProfile";
import ChatFooter from "../../components/ChatFooter";
import ChatMessage from "../../components/ChatMessage";
import ChatHeader from "../../components/ChatHeader";
import { useEffect, useState } from "react";
import Message from "../../components/Message";
import { MESSAGE, ALL_USERS } from "./mock";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import AllConnections from "./../../components/AllConnections";
import Group from "../../components/Group";
import Chats from "../../components/Chats";
import { getAllUsers, getAllGroups } from "../../api/messages";

export default function Home() {
  const date = new Date();
  const datetext = date.getHours() + ":" + date.getMinutes();
  const [hover, setHover] = useState(false);
  const [message, setMessage] = useState("");
  let [userProfile, setUserProfile] = useState(false);
  const [connectionToggel, setconnectionToggel] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [groupToggel, setGroupToggel] = useState(false);
  const [chatToggel, setChatToggel] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [allGroups, setAllGroups] = useState([]);

  const handelChat = async (id) => {
    console.log(id);
  };

  const getAllUsersHandler = async () => {
    const { data } = await getAllUsers();
    setAllUsers(data);
  }

  const getAllGroupsHandler = async () => {
    const { data } = await getAllGroups();
    setAllGroups(data);
  }

  useEffect(() => {
    getAllUsersHandler();
    getAllGroupsHandler();
  }, [allUsers, allGroups]);

  const getUserProfile = () => {
    userProfile = !userProfile;
    setUserProfile(userProfile);
  };

  const handelMessageChange = (e) => {
    return setMessage(e.target.value);
  };

  const onHover = () => {
    setHover(!hover);
  };

  const handelconnectionToggel = () => {
    setGroupToggel(false);
    setChatToggel(false);
    setconnectionToggel(!connectionToggel);
  };
  const handelSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handelGroupToggel = () => {
    setconnectionToggel(false);
    setChatToggel(false);
    setGroupToggel(!groupToggel);
  };
  const handelChatToggel = () => {
    setconnectionToggel(false);
    setGroupToggel(false);
    setChatToggel(!chatToggel);
  };

  const CURRENT_USER = {
    avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
    userName: "ChaNook",
    userId: 1,
    status: "Active",
  };

  const createGroupHandler = async () => {
    handelGroupToggel();
  };

  return (
    <div className="flex justify-between items-center ">
      {/*Side Nave*/}
      <div className=" relative w-16 h-screen  flex flex-col justify-between items-center">
        <div className="h-20 w-16 bg-slate-200 text-center">Logo</div>
        <div className="w-full h-32 flex flex-col justify-between items-center">
          <div className=" w-4/6 h-10 rounded-md hover:bg-gray-100 flex justify-center items-center  ">
            <GrGroup
              className=" cursor-pointer text-gray-600 text-xl hover:text-gray-950"
              onClick={handelGroupToggel}
            />
          </div>
          <div className=" w-4/6 h-10 rounded-md hover:bg-gray-100 flex justify-center items-center ">
            <IoChatbubblesOutline
              onClick={handelChatToggel}
              className=" cursor-pointer text-gray-600 text-xl  hover:text-gray-950"
            />
          </div>
          <div className=" w-4/6 h-10 rounded-md hover:bg-gray-100 flex justify-center items-center ">
            <FaRegUser
              onClick={handelconnectionToggel}
              className=" cursor-pointer text-gray-600  hover:text-gray-950 text-xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" h-10 w-10 rounded-full bg-slate-200 flex justify-center items-center text-center">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                className="text-gray-700 hover:text-gray-950 swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className=" text-gray-700 hover:text-gray-950 swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <div className="avatar online mt-8 mb-2">
            <div className="w-10 rounded-full">
              <img src="https://docs.material-tailwind.com/img/face-1.jpg" />
            </div>
          </div>
        </div>
      </div>
      {/*Connection*/}
      <div
        className={` ${
          connectionToggel ? "w-[363px] " : "w-0"
        } transition-all bg-gray-100  absolute h-screen start-16 z-10 `}
      >
        <AllConnections
          ALL_USERS={allUsers}
          onCreateGroup={createGroupHandler}
        />
      </div>
      {/*Groups*/}
      <div
        className={` ${
          groupToggel ? "w-[363px] " : "w-0"
        } transition-all bg-gray-100  absolute h-screen start-16 z-20 `}
      >
        <Group handelChat={handelChat} allGroups={allGroups} />
      </div>
      {/*Chats */}
      <div
        className={` ${
          chatToggel ? "w-[363px] " : "w-0"
        } transition-all bg-gray-100 absolute h-screen start-16 z-30 `}
      >
        <Chats
          handelChat={handelChat}
          handelSearch={handelSearch}
          searchValue={searchValue}
          ALL_USERS={ALL_USERS}
        />
      </div>

      {/* chat */}
      <div className="w-full flex justify-center ">
        <div className="md:w-3/12 h-screen max-sm:hidden max-md:w-2/12 md:inline-block">
          {userProfile ? <UserProfile /> : <Message ALL_USERS={ALL_USERS} />}
        </div>
        <div className="md:w-9/12 sm:w-screen h-screen flex flex-col justify-between">
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
                onHover={onHover}
              />
            </div>
            <div>
              <ChatFooter
                key={message.userId}
                handelMessageChange={handelMessageChange}
                message={message}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
