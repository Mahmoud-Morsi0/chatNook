/* eslint-disable react/prop-types */
import { useState } from "react";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const handelSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  // const filteredUsers = allUsers?.filter((user) =>
  // allUsers?.userId?.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className="">
      <input
        type="text"
        name="search"
        id="search"
        placeholder=" Search... "
        className=" h-9 rounded-full my-6 ml-3 py-1 pl-4 pr-20 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-gray-100 "
        onChange={handelSearch}
        value={searchValue}
      />
    </div>
  );
}
export default Search;
