import FormProfile from "../components/users/FormProfile";
import Navbar from "../components/Navbar";
import Logout from "../components/users/Logout";
import { withTokenAndRol } from "../container";

export default withTokenAndRol(function Profile() {
  return (
    <div className="profile">
      <Logout />

      <FormProfile />
      <div>
        <Navbar />
      </div>
    </div>
  );
}, true);
