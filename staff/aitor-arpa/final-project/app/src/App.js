import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.sass";
import Login from "./pages/Login";
import Clock from "./pages/Clock";
import Profile from "./pages/Profile";
import HomeAdmin from "./pages/HomeAdmin";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import ProfileAdmin from "./pages/ProfileAdmin";
import JobsAdmin from "./pages/JobsAdmin";
import ClockAdmin from "./pages/ClockAdmin";
import Users from "./pages/Users";

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
