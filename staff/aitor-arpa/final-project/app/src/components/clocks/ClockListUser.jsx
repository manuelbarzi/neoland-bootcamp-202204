import retrieveClockUser from "../../logic/retrieveClockUser";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import exit from "../../images/salida.png";
import clockUserOut from "../../logic/clockUserOut";
import In from "../../images/entrada.png";
import "./ClockRegister.sass";
import clockUserIn from "../../logic/clockUserIn";

export default function ClockListUser(props) {
  const [clocks, setClocks] = useState(null);

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
  }; // long cambia a texto
  const day = {
    day: "numeric",
    month: "numeric",
    /*  year: "numeric", */
    weekday: "long",
  };
  useEffect(() => {
    loadClocks();
  }, []);

  const loadClocks = () => {
    try {
      retrieveClockUser(sessionStorage.token)
        .then((clocks) => {
          setClocks(clocks);
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

          loadClocks();
          setClocks([]);
        })
        .catch((error) => {
          return toast.error(`${error}`);
        });
    } catch (error) {}
  };

  const registerTimeIn = () => {
    try {
      clockUserIn(sessionStorage.token)
        .then((result) => {
          toast.success(`clocked in register`);
          loadClocks();
        })
        .catch((error) => {
          toast.error(`${error.message}`);
        });
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <>
      {clocks && !!clocks.length && (
        <div className="">
          <ul>
            {clocks.map((clock, i) => (
              <li key={clock.id + i} className="">
                <form onSubmit={registerTimeOut}>
                  <input
                    name="clockId"
                    value={clock.id}
                    disa="true"
                    type="hidden"
                  />
                  <li />
                  <label>Out:</label>
                  <p>
                    {!clock.timeout
                      ? "-"
                      : new Date(clock.timeout).toLocaleDateString(
                          "es-ES",
                          timeOptions
                        )}
                  </p>

                  <label>In:</label>
                  <li>
                    <p>
                      {new Date(clock.timein).toLocaleDateString(
                        "es-ES",
                        timeOptions
                      )}
                    </p>
                  </li>
                  {clock.timeout ? (
                    <></>
                  ) : (
                    <div className="Center">
                      <button type="onsubmit">
                        <img src={exit} alt=""></img>
                      </button>
                    </div>
                  )}
                </form>
                <Toaster />
              </li>
            ))}
          </ul>
        </div>
      )}
      {!clocks ||
        (!clocks.some((clock) => !clock.timeout) && (
          <div className="center_row">
            <button className="btn " onClick={registerTimeIn}>
              <img src={In} alt="" disa></img>
            </button>
          </div>
        ))}
    </>
  );
}
