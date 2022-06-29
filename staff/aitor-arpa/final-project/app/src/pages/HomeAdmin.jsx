import ListJobAdmin from "../components/jobs/ListJobAdmin";
import { withTokenAndRol } from "../container";
import NavbarAdmin from "../components/NavbarAdmin";

export default withTokenAndRol(function HomeAdmin() {
  return (
    <div>
      <ListJobAdmin />
      <NavbarAdmin />
    </div>
  );
}, true);
