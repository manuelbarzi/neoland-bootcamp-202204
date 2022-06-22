import toast, { Toaster } from "react-hot-toast";
import registerUser from "../../logic/registerUser";
import "./FormRegister.sass";

export default function CardUser(props) {
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
      ).then((user) => {});
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="center_form">
      <form>
        <input className="borderDawn" type="hidden" name="id" />
        <input
          className="borderDawn"
          type="username"
          name="username"
          placeholder="Username"
        ></input>
        <input
          className="borderDawn"
          type="name"
          name="name"
          placeholder="Name"
          value={props.name}
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
        <button
          type="onSubmit"
          className="btn_form"
          onSubmit={handelRegisterUser}
        >
          Register
        </button>
        <button type="onSubmit" className="btn_form">
          Edit
        </button>
        <button type="onSubmit" className="btn_form">
          Delete
        </button>
      </form>
      <Toaster />
    </div>
  );
}
