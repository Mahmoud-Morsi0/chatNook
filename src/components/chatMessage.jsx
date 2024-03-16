/* eslint-disable react/prop-types */
import { IoCheckmark } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";

const ChatMessage = ({currentUser,message}) => {

  return (

    <div className="mb-4 px-3">
      {message.map((message)=>{
        return( <div
        key={message}
         className={`chat ${
           message.userId === currentUser.userId ? "chat-end" : "chat-start"
         }`}
       >
         <div className="chat-image avatar">
           <div className="w-10 rounded-full">
             <img src={message.avatar} />
           </div>
         </div>
         <div
           className={`chat-bubble max-w-xl  ${
             message.userId === currentUser.userId ? " bg-neutral-100  text-black": "bg-[#1e7887] text-white"
           } `}
         >
           <div
             className={`text-xs ${
               message.userId === currentUser.userId? "text-orange-600": " text-orange-400"
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

export default ChatMessage;
