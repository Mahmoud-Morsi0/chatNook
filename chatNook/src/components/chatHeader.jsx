const ChatHeader = () => {
  const curentUser = {
    avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
    userName: "Morsi",
    UserId: 1,
  };
  return (
    <div className=" w-full h-16 bg-slate-100 text-black">
      <div className=" w-fit  flex justify-between align-middle">
        <div className="chat-image avatar mt-3 ms-5">
          <div className="w-10 rounded-full">
            <img src={curentUser.avatar} />
          </div>
        </div>
        <div className=" mt-5 ms-3 font-semibold" >{curentUser.userName}</div>
      </div>
    </div>
  );
};

export default ChatHeader;
