// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import Login from '../pages/login/Login';
import LandingPage from "../pages/LandingPage";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
