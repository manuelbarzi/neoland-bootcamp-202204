import stop from "../../images/stop.png";
import play from "../../images/play.png";
import clockUserInJob from "../../logic/clockUserInJob";
import clockUserOutJob from "../../logic/clockUserOutJob";
import toast, { Toaster } from "react-hot-toast";
import "./CardJob.sass";
import { useState } from "react";
export default function CardJob(props) {
  const [clock, setClockId] = useState();
  const RegisterClockJobIn = (event) => {
    try {
      event.preventDefault();

      const jobId = props.jobid;
      clockUserInJob(sessionStorage.token, jobId)
        .then((result) => {
          toast.success(`Start the job 🙏 🤙`);
          sessionStorage.clockjob = result.clockId;
        })
        .catch((error) => {
          toast.error(`${error} ⛔`);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const RegisterClockJobOut = (event) => {
    try {
      event.preventDefault();
      const jobid = props.jobid;

      clockUserOutJob(sessionStorage.token, jobid, sessionStorage.clockjob)
        .then((result) => {
          toast.success(`🤙 Good Job`);
        })
        .catch((error) => {
          toast.error(`${error.message} `);
        });
    } catch (error) {
      toast.error(` need cloked in first`);
    }
  };

  return (
    <div className="card_Job_Pos ">
      <form className="border_radius_medium" onSubmit={RegisterClockJobIn}>
        <div className="gridTwo_reverse ">
          <input
            className="borderDawn"
            type="hidden"
            name="jobid"
            value={props._id}
          />

          <label>Title :</label>
          <input
            className="borderDawn"
            type="text"
            name="title"
            defaultValue={props.title}
          />
          <label>Des. :</label>
          <input
            className="borderDawn"
            type="text"
            name="description"
            defaultValue={props.description}
          />
          <label>Add. :</label>
          <input
            className="borderDawn"
            type="text"
            name="address"
            defaultValue={props.address}
          />
          <button className="btn_small" type="onsubmit">
            <img src={play} alt=""></img>
          </button>
          <button className="btn_small" onClick={RegisterClockJobOut}>
            <img src={stop} alt=""></img>
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
