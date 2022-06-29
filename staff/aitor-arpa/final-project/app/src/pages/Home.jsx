import React from "react";
import CardJobListUser from "../components/jobs/CardJobListUser";
import Navbar from "../components/Navbar";

import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Home() {
  return (
    <div>
      <CardJobListUser />
      <Navbar />
    </div>
  );
}, true);
