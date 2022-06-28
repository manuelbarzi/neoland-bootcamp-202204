import React from "react";
import { Route, Routes } from "react-router-dom";
import ClockListUser from "../components/clocks/ClockListUser";

import Navbar from "../components/Navbar";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Clocked() {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <ClockListUser></ClockListUser>

            <Navbar></Navbar>
          </div>
        }
      />
    </Routes>
  );
}, true);
