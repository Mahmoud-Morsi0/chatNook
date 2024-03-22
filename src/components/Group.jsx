/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { FaUserPen } from "react-icons/fa6";

const Group = ({ handelChat, allGroups }) => {
  //   console.log({ allGroups });
  //   const [searchedUser, setSearchedGroup] = useState("");
  //   useEffect(() => {
  //     if (searchedUser) {
  //       const _filteredUsers = allGroups.filter((user) =>
  //         user.fullName.toLowerCase().includes(searchedUser.toLowerCase())
  //       );
  //       setSearchedGroup(_filteredUsers);
  //     } else {
  //       setSearchedGroup(allGroups);
  //     }
  //   }, [searchedUser]);
  return (
    <div className="container flex flex-col justify-start items-center bg h-screen overflow-hidden ">
      <div className="w-full flex justify-between items-center pe-7 p-3 ">
        <div className=" text-gray-500">
          <h1 className=" font-sans my-3 font-bold text-xl color ms-3 ">
            Groups
          </h1>
        </div>
      </div>
      <div className=" m-auto p-1 h-16 mb-4 ">
        <input
          type="text"
          name="search"
          id="search"
          placeholder=" Search... "
          className=" rounded-full my-2 py-1 pl-4 pr-20 bg text-[#1e7881] focus:outline-none focus:ring-1 focus:ring-[#1e7881] border sm:text-sm sm:leading-6 bg-gray-300 "
          //   onChange={(e) => searchedUser(e.target.value)}
          //   value={searchedUser}
          // onChange={handelSearch}
          // value={searchValue}
        />
      </div>

      <div className="overflow-y-scroll h-fit p-1 sm:h-screen">
        {allGroups.map((chat) => {
          return (
            <div
              key={chat._id}
              className="p-1 flex  items-center cursor-pointer  "
              onClick={() => handelChat(chat)}
            >
              <div className=" messageage-container flex justify-between items-center h-10 p-5 mb-3 ">
                <div className="img-sec w-16 p-1">
                  <img
                    src={chat.chatPic}
                    className={` ring ring-success rounded-full w-10 hover:${""}`}
                    alt=""
                  />
                </div>
                <div className="username-sec flex flex-col align-top justify-between text-start  ">
                  <div className="text-sm font-bold color text-gray-600">
                    {chat.chatName}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {chat?.lastMessage?.message || "write your first message!"}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Group;
