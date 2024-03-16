import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { SlPicture } from "react-icons/sl";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";


const ChatFooter = () => {
  const [message ,setMessage] = useState("")

  const handelMessageChange=(e)=>{
    return setMessage(e.target.value)
  }
  console.log(message)
  return (
    <div className=" h-20 bg-gray-100 flex items-center ">
    <div className=" w-full flex justify-between items-center">
      <div className='m-auto w-2/12 flex justify-around align-middle text-[#1e7887] text-2xl'>
      <MdOutlineEmojiEmotions className= 'cursor-pointer hover:text-black '/> {/*Emoj Icon */}
      <MdAttachFile className='cursor-pointer hover:text-black'/>{/*file Icon */}
      <SlPicture className=' cursor-pointer hover:text-black '/>{/*pic Icon */}
      </div>
      <div className=" w-2/4">
      <textarea 
      className="w-full text-gray-900 border-gray-300 rounded-full min-h-1 bg-white text-lg textarea textarea-bordered placeholder:text-gray-600 focus:border-[#1e7887]"
      placeholder="Text your Message..."
      rows={1}
      value={message}
      onChange={handelMessageChange}
      >
      </textarea>
      </div>
      <div 
      className='ms-10 w-2/12 hover:text-black cursor-pointer  text-[#1e7887] text-2xl'
      >
      <IoMdSend/>{/*sender Icon */}
      </div>
    </div>
    </div>
  )
}

export default ChatFooter
