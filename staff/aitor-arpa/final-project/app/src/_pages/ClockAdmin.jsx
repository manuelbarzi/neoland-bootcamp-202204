import React from "react";
import { Route, Routes } from "react-router-dom";

import NavbarAdmin from "../Components/NavbarAdmin";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Clocked() {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <h1> Retrive all Cloks</h1>

            <NavbarAdmin />
          </div>
        }
      />
    </Routes>
  );
}, true);
