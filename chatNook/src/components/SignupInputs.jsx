import React from "react";

export default function SignupInputs() {
  return (
    <>
      <label
        for="Name"
        className="block text-sm ml-3 font-medium leading-6 text-gray-900"
      >
        Full Name
      </label>
      <input
        type="text"
        name="Name"
        id="Name"
        className="block w-1/6  h-10 rounded-md ml-3 mt-2 mb-6 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 "
      />
      <label
        for="Email"
        className=" input block text-sm ml-3 font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <input
        type="Email"
        name="Email"
        id="Email"
        className="block w-1/6  h-10 rounded-md ml-3 mt-2 mb-6 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 "
      />
      <label
        for="Password"
        className=" input block text-sm ml-3 font-medium leading-6 text-gray-900"
      >
        Password
      </label>
      <input
        type="text"
        name="Password"
        id="Password"
        className=" input block w-1/6  h-10 rounded-md ml-3 mt-2 mb-6 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:***** placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 "
      />
    </>
  );
}
