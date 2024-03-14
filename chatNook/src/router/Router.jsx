import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "../pages/home/Home";
import Login from "./../pages/login/Login";
import Registration from "./../pages/registration/Registration";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
