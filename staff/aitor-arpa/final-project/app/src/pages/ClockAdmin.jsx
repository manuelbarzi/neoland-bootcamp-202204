import React from "react";
import { Route, Routes } from "react-router-dom";
import ClockListAdmin from "../components/clocks/ClockListAdmin";

import NavbarAdmin from "../components/NavbarAdmin";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Clocked() {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <ClockListAdmin />

            <NavbarAdmin />
          </div>
        }
      />
    </Routes>
  );
}, true);
