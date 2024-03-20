/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";

export default function ProductedRoute({ children }) {

  if (localStorage.getItem("token")) {
    console.log("okay");
    return children; // Render the protected component
  } else {
    console.log("not okay");
    return <Navigate to="/login" />; // Redirect to the login page
  }
}
