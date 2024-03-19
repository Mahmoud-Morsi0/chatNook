/* eslint-disable react/prop-types */

const AllConnections = ({ handleSearch, searchValue, ALL_USERS }) => {
  return (
    <div className=" overflow-hidden">
      <div className=" w-full ">
        <div className="bg-gray-100 shadow-md">
          <input
            type="text"
            name="search"
            id="search"
            placeholder=" Search... "
            className="  rounded-full my-6 ml-3 py-1 pl-4 pr-20 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-600 sm:text-sm sm:leading-6 bg-gray-300 "
            onChange={handleSearch}
            value={searchValue}
          />
        </div>
      </div>
      <div className="w-full h-[500px] flex flex-col  justify-center items-center overflow-y-scroll ">
        {ALL_USERS.map((user) => {
          return (
            <div
              key={user.userId}
              className="w-4/6 m-auto flex justify-between items-center mb-3 mt-2"
            >
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                  <img src={user.avatar} />
                </div>
                <span className="text-gray ml-2 text-gray-600 ">
                  {user.userName}
                </span>
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox w-4 h-4 checkbox-success"
                  />
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllConnections;
