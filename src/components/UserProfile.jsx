/* eslint-disable react/prop-types */
import { CiLogout } from "react-icons/ci";
import { useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
export default function UserProfile({ className }) {
  let { setUserToken } = useContext(userContext);
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("user");
    setUserToken(null);
    navigate("/login");
  }

  return (
    <div
      className={` z-50 p-3 border border-[#1e77872c] h-screen flex flex-col justify-between text-gray-600 ${className}`}
    >
      <div>
        <div className="flex flex-col items-center ">
          <div className="avatar online mt-8 mb-2">
            <div className="w-24 rounded-full">
              <img src="https://docs.material-tailwind.com/img/face-2.jpg" />
            </div>
          </div>
          <h1 className="font-semibold text-base capitalize my-2 text-gray-600">
            ChatNook
          </h1>
        </div>
        <div className="flex justify-center">
          <div className=" h-0.5  hr w-80 my-4"></div>
        </div>
        <div className="flex justify-center my-8">
          <input
            className=" w-3/4 h-10 rounded-lg bg-gray-200 text-gray-500  text-center text-lg"
            disabled={true}
            value="Personal Data"
          ></input>
        </div>
        <div className="flex flex-col mx-6">
          <h1 className="text-slate-400 capitalize  text-base py-2">Name</h1>
          <p className="capitalize">ChatNook</p>
          <h1 className="text-slate-400 capitalize  text-base py-2">Email</h1>
          <p className="capitalize">ChatNook@gmail.com</p>
        </div>
      </div>
      <div className="w-9/12 mx-6 mb-8 flex justify-between align-middle">
        <p className="font-bold cursor-pointer" onClick={() => logOut()}>
          logout
        </p>
        <CiLogout className="text-xl" />
      </div>
    </div>
  );
}
