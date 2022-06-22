import "./FormRegister.sass";
import registerUser from "../../logic/registerUser";
import { toast } from "react-hot-toast";

export default function FormRegister() {
  const handelRegisterUser = (event) => {
    try {
      event.preventDefault();
      const name = event.target.name.value;
      const username = event.target.username.value;
      const password = event.target.password.value;
      const role = event.target.role.value;
      const nid = event.target.username.value;
      const email = event.target.email.value;
      const address = event.target.address.value;

      registerUser(
        sessionStorage.token,
        name,
        username,
        password,
        role,
        nid,
        email,
        address
      )
        .then((user) => {
          toast.success(` User register`);
        })
        .catch((error) => {
          toast.error(error);
        });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="Center">
      <form onSubmit={handelRegisterUser} className="Form">
        <input
          className="borderDawn"
          type="username"
          name="username"
          placeholder="Username"
        ></input>
        <input
          className="borderDawn"
          type="password"
          name="password"
          placeholder="Password"
        ></input>
        <input
          className="borderDawn"
          type="name"
          name="name"
          placeholder="Name"
        ></input>
        <input
          className="borderDawn"
          type="text"
          name="nid"
          placeholder="nid"
        ></input>
        <input
          className="borderDawn"
          type="email"
          name="email"
          placeholder="email"
        ></input>
        <input
          className="borderDawn"
          type="text"
          name="address"
          placeholder="Addres"
        ></input>
        <select name="role">
          <option value="" disabled selected>
            Rol
          </option>
          <option value="admin">Admin</option>
          <option value="worker">Trabajador</option>
        </select>
        <button className="btn">Register</button>
      </form>
    </div>
  );
}
