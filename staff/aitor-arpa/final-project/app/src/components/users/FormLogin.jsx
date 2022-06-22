import "./FormLogin.sass";
import authenticateUser from "../../logic/authenticateUser";
import getUserRole from "../../logic/getUserRole";
import { AuthError } from "errors";
import { useNavigate } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate();

  const handelUserLogin = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    authenticateUser(username, password)
      .then((token) => {
        sessionStorage.token = token;
        const role = getUserRole(token);
        if (!(role === "worker" || role === "admin"))
          throw new AuthError(`${username}contact your manager`);
        if (role === "worker") navigate("/");
        if (role === "admin") navigate("/admin");
      })
      .catch();
  };

  return (
    <div className="Center">
      <h3 className="logo"> CONTROL Z</h3>

      <form onSubmit={handelUserLogin} className="Form">
        <input
          className="borderDawn"
          type="username"
          name="username"
          placeholder="usuario"
        ></input>
        <input
          className="borderDawn"
          type="password"
          name="password"
          placeholder="contraseña"
        ></input>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}
export default FormLogin;
