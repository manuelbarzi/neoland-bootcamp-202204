import React from "react";
import In from "../../images/entrada.png";
import "./ClockRegister.sass";
import clockUserIn from "../../logic/clockUserIn";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export default function ClockRegister(props) {
  const registerTimeIn = () => {
    try {
      clockUserIn(sessionStorage.token)
        .then((result) => {
          toast.success(`clocked in register`);
          sessionStorage.clockUser = true;
        })
        .catch((error) => {
          toast.error(`${error.message}`);
        });
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return sessionStorage.clockUser ? (
    <div className="center_row">
      <button className="btn " onClick={registerTimeIn}>
        <img src={In} alt="" disa></img>
      </button>
    </div>
  ) : (
    <div className="center_row">
      <button className="btn on" onClick={registerTimeIn}>
        <img src={In} alt="" disa></img>
      </button>
      <Toaster />
    </div>
  );
}
