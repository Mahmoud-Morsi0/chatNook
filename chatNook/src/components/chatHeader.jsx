import { GrStatusGoodSmall } from "react-icons/gr";

const ChatHeader = () => {
  const curentUser = {
    avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
    userName: "Morsi",
    UserId: 1,
    status:'Active'
  };
  return (
    <div className="h-20 bg-slate-100 text-black">
      <div className=" w-36  flex justify-between align-middle">
        <div className="chat-image avatar mt-3 ms-5">
          <div className="w-10 rounded-full">
            <img src={curentUser.avatar} />
          </div>
        </div>
        <div className=" flex flex-col justify-center   align-middle">
        <div className=" mt-5 ms-3 font-semibold text-lg" >{curentUser.userName}</div>
        <div className="text-xs ms-3"><GrStatusGoodSmall className=" text-green-600 inline-block" /> {curentUser.status}</div>
        </div>
        
      </div>
    </div>
  );
};

export default ChatHeader;
