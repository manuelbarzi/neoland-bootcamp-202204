import { useNavigate } from "react-router-dom";
import "./Logout.sass";

export default function Logout() {
  const navigate = useNavigate();

  const ClickLogOut = () => {
    delete sessionStorage.token;
    navigate("/login");
  };

  return (
    <div className="pos">
      <button className="logout" onClick={ClickLogOut}>
        Logout
      </button>
    </div>
  );
}
