import React from "react";
import exit from "../../images/salida.png";
import In from "../../images/entrada.png";
import "./ClockRegister.sass";
import clockUserIn from "../../logic/clockUserIn";
import toast, { Toaster } from "react-hot-toast";
import clockUserOut from "../../logic/clockUserOut";

export default function ClockRegister() {
  const registerTimeIn = () => {
    try {
      clockUserIn(sessionStorage.token)
        .then((result) => {
          toast.success(`clocked in register`);
        })
        .catch((error) => {
          toast.error(`${error}`);
        });
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  const registerTimeOut = (event) => {
    try {
      event.preventDefault();
      debugger;
      const clockId = event.target.clockId.value;
      clockUserOut(sessionStorage.token, clockId)
        .then((result) => {
          if (!result) toast.error(` Error !!!`);

          toast.success(` Cloked out register`);
        })
        .catch((error) => {
          toast.error(`${error}`);
        });
    } catch (error) {}
  };
  return (
    <div className="center_row">
      <button className="btn" onClick={registerTimeIn}>
        <img src={In} alt=""></img>
      </button>
      <button className="btn_red" onClick={registerTimeOut}>
        <img src={exit} alt=""></img>
      </button>
      <Toaster />
    </div>
  );
}
