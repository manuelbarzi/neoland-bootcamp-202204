import React from "react";
import AddJob from "../Components/Jobs/AddJob";
import CardJob from "../Components/Jobs/CardJob";
import NavbarAdmin from "../Components/NavbarAdmin";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function JobsAdmin() {
  return (
    <div>
      <AddJob />
      <NavbarAdmin />
    </div>
  );
}, true);
