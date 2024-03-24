import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { userContext } from "../context/UserContext";
import ProductedRoute from "../ProductedRoute/ProductedRoute";
import { useContext, useEffect } from "react";
import UserProfile from "../components/UserProfile";

export default function Router() {
  let { setUserToken, setUserId, setUserEmail, setUserName } =
    useContext(userContext);
  useEffect(() => {
    if (
      localStorage.getItem("token") ||
      localStorage.getItem("id") ||
      localStorage.getItem("userEmail") ||
      localStorage.getItem("userName")
    ) {
      setUserToken(localStorage.getItem("token"));
      setUserId(localStorage.getItem("id"));
      setUserEmail(localStorage.getItem("userEmail"));
      setUserName(localStorage.getItem("userName"));
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/home"
            element={
              <ProductedRoute>
                <Home />
              </ProductedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="*" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
