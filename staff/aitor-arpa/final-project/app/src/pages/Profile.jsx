import { Route, Routes } from "react-router-dom";
import FormProfile from "../components/users/FormProfile";

import Navbar from "../components/Navbar";
import Logout from "../components/users/Logout";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Profile() {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <Logout />
            <h1 className="logo"> User </h1>
            <FormProfile />
            <div>
              <Navbar />
            </div>
          </div>
        }
      />
    </Routes>
  );
}, true);
