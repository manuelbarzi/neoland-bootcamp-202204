import retrieveClocks from "../../logic/retrieveClocks";
import retrieveUserName from "../../logic/retrieveUserName";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "./ClockListAdmin.sass";

export default function ClockListAdmin() {
  const [clocks, setClocks] = useState(null);

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    /* weekday: "long", */
  };
  useEffect(() => {
    loadclocks();
  }, []);
  const loadclocks = () => {
    try {
      retrieveClocks(sessionStorage.token)
        .then((clocks) => {
          setClocks(clocks);
          return clocks;
        })
        .catch((error) => {
          toast.error(error);
        });
    } catch (error) {
      toast.error(error);
    }
  };

  return clocks && clocks.length ? (
    <ul>
      {clocks.map((clock, i) => (
        <div className="gaps ">
          <li key={i} className="gridTwo_small">
            <input
              id="prodId"
              name="clocId"
              value={clock.id}
              disabled
              type="hidden"
            />
            <label> Job:</label>
            <input
              name="job"
              className="borderDawn"
              value={clock.job === null ? "-" : clock.job.title}
              disabled
            />
            <label>User:</label>
            <input
              name="user"
              className="borderDawn"
              value={clock.user.name}
              disabled
            />
            <label>In:</label>
            <input
              name="timein"
              className="borderDawn"
              value={new Date(clock.timein).toLocaleDateString(
                "es-ES",
                timeOptions
              )}
              disabled
            />{" "}
            <label>Out:</label>
            <input
              name="timeout"
              className="borderDawn"
              value={
                clock.timeout === null
                  ? "-"
                  : new Date(clock.timeout).toLocaleDateString(
                      "es-ES",
                      timeOptions
                    )
              }
              disabled
            />{" "}
            <li />
          </li>
        </div>
      ))}
    </ul>
  ) : (
    <h1 className="center logo">No tienes horas guardadas</h1>
  );
}
