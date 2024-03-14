import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";

const Message = () => {

  const currentUser = {
    id: 1,
  };
  const message = {
    id: 1,
    name: "Morsi",
    avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
    text: "Hello ChatNookHello",
    date:"21:15",
    status:"bending"
  };
  const date = new Date();
  const datetext = date.getHours() + ":" + date.getMinutes();
  console.log(datetext)

  return (

    <div className="mb-4 ">
      <div
        className={`chat ${
          message.id === currentUser.id ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <div
          className={`chat-bubble max-w-80 ${
            message.id === currentUser.id ? " bg-neutral-100  text-black": "bg-[#1e7887] text-white"
          } `}
        >
          <div
            className={`text-xs ${
              message.id === currentUser.id? "text-orange-600": " text-orange-400"
            } `}
          >
            {message.name}
          </div>
          <div 
          className="text-xs"
          >
           {message.text}
          </div>
          
        </div>
        <div 
            className="text-xs text-gray-500 dark:text-gray-900">
            {message.status==="bending"? 
              <IoCheckmark className="mx-1 inline-block"/>
            : <IoCheckmarkDone  className="mx-1 inline-block text-green-600"/>} 
            {message.date}

          </div>
      </div>
    </div>
  );
};

export default Message;
