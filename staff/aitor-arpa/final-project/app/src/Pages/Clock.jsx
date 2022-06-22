import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ClockAll from "../Components/Cloks/ClockAll";
import ClockRegister from "../Components/Cloks/ClockRegister";
import Navbar from "../Components/Navbar";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Clocked() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <ClockAll></ClockAll>
            <ClockRegister></ClockRegister>
            <Navbar></Navbar>
          </div>
        }
      />
    </Routes>
  );
}, true);
