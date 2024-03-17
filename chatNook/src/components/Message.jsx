import React from 'react'

const Message = () => {
  return (
    <>
    <div className="message-container flex justify-between w-96 h-20 m-auto">
        <div className="img-sec w-24 pt-2">
            <img src="message img/userImg.png" className='rounded-full w-16' alt="" />
        </div>
        <div className="username-sec flex flex-col align-top justify-between text-start">
            <div className='font-bold'>Cameron Williamson</div>
            <div className='text-zinc-600'>Not too bad, just trying to catch up on some work. How about you?</div>
        </div>
        <div className="notify-sec flex flex-col justify-around text-zinc-600">
            <div>5s</div>
            <div className='rounded-full w-6 text-white bg-teal-700'>1</div>
        </div>
    </div>
    </>
  )
}

export default Message
