import React from "react";
import CardJob from "../Components/Jobs/CardJob";
import Navbar from "../Components/Navbar";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Jobs() {
  return (
    <div>
      <CardJob />
      <Navbar />
    </div>
  );
}, true);
