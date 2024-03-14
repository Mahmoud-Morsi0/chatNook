import React from "react";
import myImage from "../assets/Logo.png";

export default function Logo() {
  return (
    <>
      <img src={myImage} alt="" width="120px" className="ml-10 mt-4" />
    </>
  );
}
