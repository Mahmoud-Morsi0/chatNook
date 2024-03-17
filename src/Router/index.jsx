// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
// import Home from "../pages/Home/Home";
import Home from "../pages/home/Home"
import Login from '../pages/login/login';
import LandingPage from "../pages/LandingPage";
import Registration from './../pages/registration/registration';

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
