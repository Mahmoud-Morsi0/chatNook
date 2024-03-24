/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
export default function ProductedRoute({ children }) {
  if (localStorage.getItem("token") !== null) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
