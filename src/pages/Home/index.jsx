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
import {
  getAllUsers,
  getAllGroups,
  getAllMessages,
  sendMessage,
} from "../../api/messages";
import Logo from "./../../components/Logo";
import StartMessage from "../../components/StartMessage";

export default function Home() {
  const date = new Date();
  const datetext = date.getHours() + ":" + date.getMinutes();
  console.log(datetext);
  const [hover, setHover] = useState(false);
  const [message, setMessage] = useState("");
  let [userProfile, setUserProfile] = useState(false);
  const [connectionToggel, setconnectionToggel] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [groupToggel, setGroupToggel] = useState(false);
  const [chatToggel, setChatToggel] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  const [allMessages, setAllMessages] = useState([]);

  const handleChatMessages = async () => {
    const { data } = await getAllMessages({
      chatId: selectedChat._id,
      recieverId: selectedChat.participants[0]._id,
    });
    setAllMessages(data);
    console.log({ data });
  };

  const getAllUsersHandler = async () => {
    const { data } = await getAllUsers();
    setAllUsers(data);
  };

  const getAllGroupsHandler = async () => {
    const { data } = await getAllGroups();
    setAllGroups(data);
  };

  const createNewMessageHandler = async () => {
    const { data } = await sendMessage({
      message,
      chatId: selectedChat._id,
      recieverId: selectedChat.participants[0]._id,
    });
    setMessage("");
    handleChatMessages();
    getAllGroupsHandler();
  };

  const handelChat = async (chat) => {
    setSelectedChat(chat);
  };

  useEffect(() => {
    if (selectedChat) {
      handleChatMessages();
    }
  }, [selectedChat]);

  useEffect(() => {
    getAllUsersHandler();
    getAllGroupsHandler();
  }, []);

  const getUserProfile = () => {
    userProfile = !userProfile;
    setUserProfile(userProfile);
  };

  const handelMessageChange = (body) => {
    setMessage(body);
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
    getAllGroupsHandler();
  };

  return (
    <div className="flex justify-between items-center ">
      {/*Side Nave*/}
      <div className=" relative w-28 h-screen  flex flex-col justify-between items-center">
        <div>
          <Logo />
        </div>
        <div className="w-full h-44 flex flex-col justify-between items-center">
          <div className=" w-4/6 h-10 rounded-md hover:bg-gray-100 flex justify-center items-center  ">
            <GrGroup
              className=" cursor-pointer text-gray-500 color text-2xl hover:text-gray-950"
              onClick={handelGroupToggel}
            />
          </div>
          <div className=" w-4/6 h-10 rounded-md hover:bg-gray-100 flex justify-center items-center ">
            <IoChatbubblesOutline
              onClick={handelChatToggel}
              className=" cursor-pointer color text-gray-500 text-2xl  hover:text-gray-950"
            />
          </div>
          <div className=" w-4/6 h-10 rounded-md hover:bg-gray-100 flex justify-center items-center ">
            <FaRegUser
              onClick={handelconnectionToggel}
              className=" cursor-pointer text-gray-500  color hover:text-gray-950 text-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
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
          connectionToggel ? "w-[363px]" : "w-0"
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
          {selectedChat ? (
            <>
              <div>
                <ChatHeader
                  user={MESSAGE}
                  CURRENT_USER={CURRENT_USER}
                  getUserProfile={getUserProfile}
                  selectedChat={selectedChat}
                />
              </div>
              <div className="flex-1 p-8">
                <ChatMessage
                  key={CURRENT_USER.userId}
                  CURRENT_USER={CURRENT_USER}
                  message={MESSAGE}
                  onHover={onHover}
                  selectedChat={selectedChat}
                  allMessages={allMessages}
                />
              </div>
              <div>
                <ChatFooter
                  key={message.userId}
                  setMessage={handelMessageChange}
                  message={message}
                  onSendMessage={createNewMessageHandler}
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex justify-center items-center">
              <StartMessage onClickButton={handelconnectionToggel} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
