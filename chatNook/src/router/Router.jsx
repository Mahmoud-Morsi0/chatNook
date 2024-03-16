import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "../pages/home/Home";
import Registration from "./../pages/registration/Registration";
<<<<<<< HEAD
import Login from './../pages/login/login';
=======
import LandingPage from "./../pages/LandingPage/LandingPage";
>>>>>>> 8abf8d0ccae671ed37cdadd8ff9634ad7740be3f

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
