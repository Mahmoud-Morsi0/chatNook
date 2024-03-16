import React from "react";
import Logo from "./../../components/Logo";
import myImage from "../../assets/hero.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="flex items-center justify-between container ms-auto">
        <Logo></Logo>
        <div className="w-1/40 mr-44">
          <Link to="/login">
            <button className="text-cyan-800 bg-white border-2 border-cyan-800 border-solid rounded-md w-32 h-12  font-medium hover:bg-cyan-800 hover:text-white mx-4">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="text-white bg-cyan-800 border-2 border-cyan-800 border-solid rounded-md w-32 h-12 font-medium hover:bg-white hover:text-cyan-800 mx-4">
              Register
            </button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-around mt-20 container ms-auto">
        <div className="flex flex-col w-1/3 ">
          <h1 className="text-5xl font-bold leading-relaxed">
            Connect friends easily <span className="text-cyan-800">&</span>{" "}
            Quickly
          </h1>
          <p className=" text-xl text-gray-500 mt-6 mb-10 w-3/4 leading-relaxed">
            Our chat app is the perfect way to stay connected with friends and
            family.
          </p>
          <Link to="/register">
            <button className="text-white bg-cyan-800 border-2 border-cyan-800 border-solid rounded-md w-40 h-12 font-medium hover:bg-white hover:text-cyan-800 ">
              Register Now
            </button>
          </Link>
        </div>
        <img src={myImage} alt="" width="550px" />
      </div>
    </>
  );
}
