import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.sass";
import "../src/Components/Logout.sass";
import Login from "./Pages/Login";
import Clock from "./Pages/Clock";
import Profile from "./Pages/Profile";
import HomeAdmin from "./Pages/HomeAdmin";
import Home from "./Pages/Home";
import NavbarAdmin from "./Components/NavbarAdmin";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import getUserRole from "./logic/getUserRole";
import Jobs from "./Pages/Jobs";
import Logout from "./Components/Logout";

export default function App({ onLogout }) {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const [islogged, setLoged] = useState(null);

  const selectrole = () => {
    if (sessionStorage.token) {
      role = getUserRole(sessionStorage.token);
      setLoged(true);
      setRole(role);
    }
    setRole(null);
  };

  const goToLogout = () => {
    navigate("/");
  };

  return (
    <>
      <Logout onLogout={onLogout} />
      <Routes>
        <Route index element={<Login />} />
        <Route index path="/home" element={<Home />} />

        {/* ----- WORKER ----- */}
        <Route path="/clock/*" element={<Clock />} />
        <Route path="/job" element={<Jobs />} />

        {/* ----- ADMIN ----- */}
        <Route path="/admin" element={<HomeAdmin onLogout={goToLogout} />} />

        <Route path="/profile/*" element={<Profile />} />
      </Routes>
      {/* role === 'worker' && <Navbar />*/}
      {/* {role === 'admin' && <NavbarAdmin />} */}
      <NavbarAdmin />
      <Toaster />
    </>
  );
}
