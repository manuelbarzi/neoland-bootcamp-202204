import ListJobAdmin from "../Components/Jobs/ListJobAdmin";
import { withTokenAndRol } from "../container";
import NavbarAdmin from "../Components/NavbarAdmin";

export default withTokenAndRol(function HomeAdmin() {
  return (
    <div>
      <ListJobAdmin />
      <NavbarAdmin />
    </div>
  );
}, true);
