import React from "react";
import ClockListUser from "../components/clocks/ClockListUser";
import Navbar from "../components/Navbar";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Clocked() {
  return (
    <div>
      <ClockListUser></ClockListUser>

      <Navbar></Navbar>
    </div>
  );
}, true);
