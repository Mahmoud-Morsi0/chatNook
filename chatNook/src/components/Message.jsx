// import React from 'react'
import Search from './Search';
import Logo from './Logo';

const Message = () => {
    
  return (
    <>
    <div className=' flex flex-col justify-start border border-[#1e77872c] h-screen '>
        <div>
            <Logo />
        </div>
        
        <div>

            <Search/>
        </div>
    
    <div className="message-container flex justify-between h-20 p-3">
        <div className="img-sec w-24 pt-2">
            <img src="https://docs.material-tailwind.com/img/face-2.jpg" className='rounded-full w-12' alt="" />
        </div>
        <div className="username-sec flex flex-col align-top justify-between text-start">
            <div className='font-bold'>Cameron Williamson</div>
            <div className='text-zinc-600'>Not too bad, just trying to catch up on some work. How about you?</div>
        </div>
        <div className="notify-sec flex flex-col justify-around text-zinc-600">
            <div>5s</div>
            <div className='rounded-full w-6 text-white align-middle text-center bg-teal-700'>1</div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Message