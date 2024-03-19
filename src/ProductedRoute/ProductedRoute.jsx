import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

export default function ProductedRoute({ children }) {
  const [cookies, getCookies] = useCookies(["user"]);

  if (getCookies("user") !== null) {
    console.log("okay");
    return children; // Render the protected component
  } else {
    console.log("not okay");
    return <Navigate to="/login" />; // Redirect to the login page
  }
}
