import React from "react";
import AddJob from "../components/jobs/AddJob";
import NavbarAdmin from "../components/NavbarAdmin";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function JobsAdmin(props) {
  return (
    <div>
      <AddJob />
      <NavbarAdmin />
    </div>
  );
}, true);
