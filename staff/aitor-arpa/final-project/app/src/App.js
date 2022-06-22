import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.sass";
import "../src/Components/Logout.sass";
import Login from "./Pages/Login";
import Clock from "./Pages/Clock";
import Profile from "./Pages/Profile";
import HomeAdmin from "./Pages/HomeAdmin";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import ProfileAdmin from "./Pages/ProfileAdmin";
import JobsAdmin from "./Pages/JobsAdmin";
import ClockAdmin from "./Pages/ClockAdmin";
import Users from "./Pages/Users";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* ----- WORKER ----- */}
        <Route path="/clock/*" element={<Clock />} />
        <Route path="/job" element={<Jobs />} />
        <Route path="/profile/*" element={<Profile />} />

        {/* ----- ADMIN ----- */}
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="admin/profile" element={<ProfileAdmin />} />
        <Route path="admin/clock" element={<ClockAdmin />} />
        <Route path="admin/job" element={<JobsAdmin />} />
        <Route path="admin/user" element={<Users />} />

        <Route path="/404" element={<h1>not found</h1>} />
      </Routes>

      <Toaster />
    </>
  );
}
