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
    <div className="center_form ">
      <form className="Center">
        <input className="borderDawn" type="hidden" name="id" />
        <input
          className="borderDawn"
          type="username"
          name="username"
          placeholder={props.username}
        ></input>

        <input
          className="borderDawn"
          type="text"
          disabled
          name="name"
          placeholder={props.name}
        ></input>
        <input
          className="borderDawn"
          type="text"
          name="nid"
          placeholder="nid"
          value={props.nid}
        ></input>
        <input
          className="borderDawn"
          type="email"
          name="email"
          placeholder="email"
          value={props.email}
        ></input>
        <input
          className="borderDawn"
          type="text"
          name="address"
          placeholder="Addres"
          value={props.address}
        ></input>
      </form>
      <Toaster />
    </div>
  );
}
