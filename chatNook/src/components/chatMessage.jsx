import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";

const Message = () => {

  const currentUser = {
    id: 1,
  };
  const message = [
    {id: 2,
    name: "ChatNook",
    avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
    text: "Hello ChatNookHello ChatNookHello ChatNookHello ChatNookHello ChatNookHello",
    date:"21:15",
    status:"bendging"},
    {id: 1,
      name: "Morsi",
      avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
      text: "Lorem Ipsum is Lorem Ipsum and I am Lorem Ipsum Lorem Ipsum is Lorem Ipsum and I am Lorem Ipsum Lorem Ipsum is Lorem Ipsum and I am Lorem Ipsum ",
      date:"21:15",
      status:"bendging"},
      {id: 2,
        name: "ChatNook",
        avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
        text: "Hello Morsi",
        date:"21:15",
        status:"bndging"},
        {id: 1,
          name: "Morsi",
          avatar: "https://docs.material-tailwind.com/img/face-1.jpg",
          text: "Hello ChatNook",
          date:"21:15",
          status:"bending"}
    ];
  const date = new Date();
  const datetext = date.getHours() + ":" + date.getMinutes();
  console.log(datetext)

  return (

    <div className="mb-4 px-3">
      {message.map((message)=>{
        return( <div
        key={message}
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
           className={`chat-bubble max-w-xl  ${
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
       </div>)
      })}
     
    </div>
  );
};

export default Message;
