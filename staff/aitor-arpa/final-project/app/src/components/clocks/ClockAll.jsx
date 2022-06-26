import retrieveClockUser from "../../logic/retrieveClockUser";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import exit from "../../images/salida.png";
import clockUserOut from "../../logic/clockUserOut";

export default function ClockAll(props) {
  const [timeStamp, setTimeStamp] = useState(null);
  const [clocks, setClok] = useState(null);
  const handedelRegisterClock = () => setTimeStamp(Date.now());
  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    weekday: "long",
  }; // long cambia a texto
  useEffect(() => {
    loadclocks();
  }, [timeStamp]);
  const loadclocks = () => {
    try {
      retrieveClockUser(sessionStorage.token)
        .then((clocks) => {
          setClok(clocks);
        })
        .catch((error) => {
          toast.error(error);
        });
    } catch (error) {
      toast.error(error);
    }
  };
  const registerTimeOut = (event) => {
    try {
      event.preventDefault();

      const clockId = event.target.clockId.value;
      clockUserOut(sessionStorage.token, clockId)
        .then((result) => {
          toast.success(` Cloked out register`);
          delete sessionStorage.clockUser;
          setTimeStamp(Date.now());
        })
        .catch((error) => {
          return toast.error(`${error}`);
        });
    } catch (error) {}
  };

  return clocks && clocks.length ? (
    <ul className="Center ">
      {clocks.map((clock) => (
        <li key={clock._id} className="">
          <form onSubmit={registerTimeOut}>
            <input name="clockId" value={clock._id} type="hidden" />
            <li />
            <label>Out:</label>
            <p>
              {new Date(clock.timeout).toLocaleDateString("es-ES", timeOptions)}
            </p>

            <label>In:</label>
            <li>
              {new Date(clock.timein).toLocaleDateString("es-ES", timeOptions)}
            </li>
            <div className="Center">
              <button type="onsubmit">
                <img src={exit} alt=""></img>
              </button>
            </div>
          </form>
          <Toaster />
        </li>
      ))}
    </ul>
  ) : (
    <h1 className="Center logo">No tienes horas registradas</h1>
  );
}
