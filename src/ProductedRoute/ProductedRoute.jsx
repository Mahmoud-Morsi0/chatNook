import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";
export default function ProductedRoute({ children }) {
  //const [cookies, getCookies] = useCookies(["user"]);
  // const cookie = new Cookies();
  if (localStorage.getItem("user") != null) {
    console.log("okay");

    return children; // Render the protected component
  } else {
    console.log("not okay");
    return <Navigate to="/login" />; // Redirect to the login page
  }
}
