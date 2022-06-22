import React from "react";
import NavbarAdmin from "../Components/NavbarAdmin";
import FormRegister from "../Components/Users/FormRegister";
/* import SerchUser from "../Components/Users/SearchUser"; */
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Users() {
  return (
    <div>
      <FormRegister />

      <NavbarAdmin />
    </div>
  );
}, true);
