import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from '../pages/login/login';
import LandingPage from "../pages/LandingPage/index";
import Registration from '../pages/registration/registration';

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
