import React from "react";
import CardJobLis from "../Components/Jobs/CardJobList";
import Navbar from "../Components/Navbar";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Home() {
  return (
    <div>
      <CardJobLis />
      <Navbar />
    </div>
  );
}, true);
