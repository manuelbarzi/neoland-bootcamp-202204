import React from "react";
import CardJob from "../components/jobs/CardJob";
import Navbar from "../components/Navbar";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Jobs() {
  return (
    <div>
      <CardJob />
      <Navbar />
    </div>
  );
}, true);
