import React from "react";
import AddJob from "../components/jobs/AddJob";
import NavbarAdmin from "../components/NavbarAdmin";
import UserList from "../components/users/UserList";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function JobsAdmin(props) {
  return (
    <div>
      {/* <UserList /> */}
      <AddJob />
      <NavbarAdmin />
    </div>
  );
}, true);
