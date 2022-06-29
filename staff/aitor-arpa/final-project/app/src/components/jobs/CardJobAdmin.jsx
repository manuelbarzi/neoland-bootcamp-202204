import del from "../../images/delete.png";
import edit from "../../images/edit.png";
import updateJob from "../../logic/updateJob";
import toast, { Toaster } from "react-hot-toast";
import "./CardJob.sass";
import deleteJob from "../../logic/deleteJob";

export default function CardJobAdmin(props) {
  const handeldeltejob = (event) => {
    try {
      event.preventDefault();
      const { jobid } = props;
      deleteJob(sessionStorage.token, jobid)
        .then((job) => {
          toast.success(`job remove`);
          props.ondeleteclicked();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handelUpdateJob = (event) => {
    try {
      event.preventDefault();
      const { jobid } = props;

      let title, address, worker, description;
      if (!event.target.title.value) title = props.title;
      else {
        title = event.target.title.value;
      }
      if (!event.target.description.value) description = props.description;
      else {
        description = event.target.description.value;
      }
      if (!event.target.address.value) address = props.address;
      else {
        address = event.target.address.value;
      }

      if (!event.target.worker.value) worker = props.worker;
      else {
        worker = event.target.worker.value;
      }

      updateJob(
        sessionStorage.token,
        jobid,
        title,
        description,
        address,
        worker
      )
        .then((jobid) => {
          toast.success(`job edit`);
          props.ondeleteclicked();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="card_Job_Pos">
      <form onSubmit={handelUpdateJob}>
        <div className="gridTwo_25 ">
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
            placeholder={props.title}
          />
          <label>Desc. :</label>
          <input
            className="borderDawn"
            type="text"
            name="description"
            placeholder={props.description}
          />
          <label>Add. :</label>
          <input
            className="borderDawn"
            type="text"
            name="address"
            placeholder={props.address}
          />
          <label>Worker :</label>
          <input
            className="borderDawn"
            type="text"
            name="worker"
            placeholder={props.worker}
          />

          <button className="btn_small" type="submit">
            <img src={edit} alt=""></img>
          </button>
          <button className="btn_small" onClick={handeldeltejob}>
            <img src={del} alt=""></img>
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
