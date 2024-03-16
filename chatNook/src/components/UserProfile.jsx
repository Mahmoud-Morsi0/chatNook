// import React from "react";

import { CiLogout } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
export default function UserProfile({className}) {
  return (
    <div className={`p-3 border border-[#1e77872c] h-screen flex flex-col justify-between text-black ${className}`} >
      <div>
        <div className="flex flex-col items-center ">
          <div className="avatar online mt-8 mb-2">
            
            <div className="w-24 rounded-full">
              <img src="https://docs.material-tailwind.com/img/face-1.jpg" />
            </div>
          </div>
          <h1 className="font-semibold text-base capitalize my-2">
            Morsi
          </h1>
        </div>
        <div className="flex justify-center">
          <div className=" h-0.5  hr w-80 my-4"></div>
        </div>
        <div className="flex justify-center my-8">
         <input className=" w-3/4 h-10 rounded-lg bg-gray-200 text-gray-500  text-center text-lg" disabled='true' value="Personal Data"></input>
        </div>
        <div className="flex flex-col mx-6">
          <h1 className="text-slate-400 capitalize  text-base py-2">name</h1>
          <p className="capitalize">Eman Elsayed</p>
          <h1 className="text-slate-400 capitalize  text-base py-2">email</h1>
          <p className="capitalize">Eman Elsayed@Yahoo.com</p>
        </div>
      </div>
      <div className="w-9/12 mx-6 mb-8 flex justify-between align-middle">
        <p className="font-bold">logout</p>
        <CiLogout className="text-xl" />

      </div>
    </div>
  );
}
