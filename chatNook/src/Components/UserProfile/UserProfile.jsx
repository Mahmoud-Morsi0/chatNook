import React from "react";

import { CiLogout } from "react-icons/ci";

export default function UserProfile() {
  return (
    <div className="p-3 border border-[#1e77872c] h-screen flex flex-col justify-between text-black">
      <div>
        <div className="flex flex-col items-center ">
          <div className="avatar online mt-8 mb-2">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <h1 className="font-semibold text-base capitalize my-2">
            Eman sayed
          </h1>
        </div>
        <div className="flex justify-center">
          <div className=" h-0.5  hr w-80 my-4"></div>
        </div>
        <div className="flex justify-center my-8">
          <select className="select select-bordered w-full max-w-xs hr px-2">
            <option disabled selected className="bg-white">
              personal info
            </option>
            <option className="bg-white">Han Solo</option>
            <option className="bg-white"> personal info</option>
          </select>
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
