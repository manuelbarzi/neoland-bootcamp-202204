import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from "./components/Register/index.jsx";
import Login from "./components/Login/index.jsx";
import Project from "./components/Project/index.jsx";


function App() {


  return (<div className="App Container">
        <Routes>
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/project' element={<Project />} />

        </Routes>

      </div>
  );
}

export default App;
