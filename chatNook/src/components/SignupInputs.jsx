import React, { useState } from "react";

export default function SignupInputs() {
  
const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log(name);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };
  
  return (
    <>
      <label
        htmlFor="Name"
        className="block text-sm ml-3 font-medium leading-6 text-gray-900"
      >
        Full Name
      </label>
      <input
        type="text"
        name="Name"
        id="Name"
value={name}
        onChange={handleNameChange}
        className="block w-1/6  h-10 rounded-md ml-3 mt-2 mb-6 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 "
      />
      <label
        htmlFor="Email"
        className=" input block text-sm ml-3 font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <input
        type="Email"
        name="Email"
        id="Email"
        value={email}
        onChange={handleEmailChange}
        className="block w-1/6  h-10 rounded-md mb-6 ml-3 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 "
      />
      <label
        htmlFor="Password"
        className=" input block text-sm ml-3 font-medium leading-6 text-gray-900"
      >
        Password
      </label>
      <input
        type="password"
        name="Password"
        id="Password"
        value={password}
        onChange={handlePasswordChange}
        className=" input block w-1/6  h-10 rounded-md ml-3 mb-2 py-1 pl-4 pr-20 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200  placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 "
      />
    </>
  );
}
