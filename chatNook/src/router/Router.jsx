// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "../pages/home/Home";
import Registration from "./../pages/registration/Registration";
import Login from './../pages/login/login';
import LandingPage from "./../pages/LandingPage/LandingPage";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
