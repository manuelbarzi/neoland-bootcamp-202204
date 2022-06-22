import stop from "../../images/stop.png";
import play from "../../images/play.png";
import clockUserInJob from "../../logic/clockUserInJob";
import clockUserOutJob from "../../logic/clockUserOutJob";
import toast, { Toaster } from "react-hot-toast";
import "./CardJob.sass";
export default function CardJobAdmin(props) {
  const RegisterClockJobIn = (event) => {
    try {
      event.preventDefault();

      const jobId = event.target.jobId.value;
      clockUserInJob(sessionStorage.token, jobId)
        .then((result) => {
          const clockId = result;
          toast.success(`Start the job 🙏 🤙`);
        })
        .catch((error) => {
          toast.error(`${error} ⛔`);
        });
    } catch (error) {
      toast.error(error);
    }
  };

  const RegisterClockJobOut = (event) => {
    try {
      event.preventDefault();
      const clockId = event.target.clockId.value;
      const jobId = event.target.jobid.value;

      clockUserOutJob(sessionStorage.token, jobId, clockId)
        .then((result) => {
          if (result) toast.success(`Start the job 🙏 🤙`);
        })
        .catch((error) => {
          toast.error(`${error} ⛔`);
        });
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="card_Job_Pos ">
      <form className="border_radius_medium">
        <div className="gridTwo_reverse ">
          <input
            className="borderDawn"
            type="hidden"
            name="jobId"
            defaultValue={props.id}
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
          <label>Worker :</label>
          <input
            className="borderDawn"
            type="text"
            name="worker"
            defaultValue={props.worker}
          />
          <button className="btn_small" onClick={RegisterClockJobIn}>
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
