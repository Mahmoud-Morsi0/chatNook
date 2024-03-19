import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { UserContextProvider } from "../context/UserContext";
import ProductedRoute from "../ProductedRoute/ProductedRoute";
export default function Router() {
  return (
    <>
      <UserContextProvider>
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
      </UserContextProvider>
    </>
  );
}
