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
    <div className="center_form center_top ">
      <form className="center gap20">
        <input className="borderDawn" type="hidden" name="id" />
        <input
          className="borderDawn"
          type="username"
          name="username"
          placeholder="Username is empty"
          value={props.username}
          readOnly
        ></input>

        <input
          className="borderDawn"
          type="text"
          name="name"
          placeholder="name is empty"
          value={props.name}
          readOnly
        ></input>
        <input
          className="borderDawn"
          type="text"
          name="nid"
          placeholder="nid is empty"
          value={props.nid}
          readOnly
        ></input>
        <input
          className="borderDawn"
          type="email"
          name="email"
          placeholder="email is empty"
          value={props.email}
          readOnly
        ></input>
        <input
          className="borderDawn"
          type="text"
          name="address"
          placeholder="Addres is empty"
          value={props.address}
        ></input>
      </form>
      <Toaster />
    </div>
  );
}
