// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "../pages/home/Home";
import Login from '../pages/login/Login';
import LandingPage from "../pages/landingPage";
import Registration from '../pages/registration/Registration';

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
