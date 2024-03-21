import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { UserContextProvider, userContext } from "../context/UserContext";
import ProductedRoute from "../ProductedRoute/ProductedRoute";
import { useContext, useEffect } from "react";

export default function Router() {
  let { setUserToken } = useContext(userContext);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUserToken(localStorage.getItem("token"));
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
