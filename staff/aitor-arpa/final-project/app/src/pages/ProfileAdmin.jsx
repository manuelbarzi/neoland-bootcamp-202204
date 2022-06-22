import { Route, Routes } from "react-router-dom";
import FormProfile from "../Components/Users/FormProfile";
import NavbarAdmin from "../Components/NavbarAdmin";
import Logout from "../Components/Logout";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function ProfileAdmin() {
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
              <NavbarAdmin />
            </div>
          </div>
        }
      />
    </Routes>
  );
}, true);
