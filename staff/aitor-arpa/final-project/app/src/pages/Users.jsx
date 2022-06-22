import React from "react";
import NavbarAdmin from "../components/NavbarAdmin";
import FormRegister from "../components/users/FormRegister";
/* import SerchUser from "../components/Users/SearchUser"; */
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Users() {
  return (
    <div>
      <FormRegister />

      <NavbarAdmin />
    </div>
  );
}, true);
