import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/index.jsx";
import Login from "./components/Login/index.jsx";
import Project from "./components/Project/index.jsx";
import Dashboards from "./components/Dashboards/index.jsx";
import PreviewProject from "./components/PreviewProject/index.jsx";

function App() {
  return (
    <div className="App Container">
      <Routes>
        <Route exact path="/" element={<Project />} />
        <Route path="/project" element={<Project />} />

        <Route exact path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboards" element={<Dashboards />} />

        <Route path="/previewProject/:projectId" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
