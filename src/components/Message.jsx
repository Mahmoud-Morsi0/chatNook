// import React from 'react'
import Search from "./Search";
import Logo from "./Logo";

const Message = () => {
    const message=[1,2,3,4,5,6,7,8,9,10,11,12]
  return (
    <>
    
      <div className="container flex flex-col justify-start border border-[#1e77872c] h-screen ">
      <div className="">
              <Logo />
            </div>
    
            <div className="max-md:w-48">
              <Search />
            </div>
            <div className="overflow-y-scroll h-fit p-1">
      {message.map((mess)=>{
        return(
            <div 
            key={mess}
            className="p-1 flex justify-center "
            >
            
            <div className=" message-container flex justify-between h-16 p-2 mb-1 ">
              <div className="img-sec w-24 pt-1">
                <img
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  className="rounded-full w-12"
                  alt=""
                />
              </div>
              <div className="username-sec flex flex-col align-top justify-between text-start  ">
                <div className="text-sm font-bold text-gray-600">Cameron Williamson</div>
                <div className="text-zinc-600 text-xs">
                  Not too bad, just trying to catch up on some work. How about you?
                </div>
              </div>
              <div className="notify-sec flex flex-col justify-around text-zinc-600">
                <div>5s</div>
                <div className="rounded-full w-4 text-white align-middle text-center bg-teal-700">
                  1
                </div>
              </div>
            </div>
            </div>
        )
    })}
    </div>
   
      </div>
    </>
  );
};

export default Message;
