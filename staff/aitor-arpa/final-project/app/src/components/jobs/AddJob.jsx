import toast, { Toaster } from "react-hot-toast";
import newJob from "../../images/addJob.png";
import addJob from "../../logic/addJob";
import retrieveUsersRol from "../../logic/retrieveUsersRol";
import { useState, useEffect } from "react";

export default function AddJob(props) {
  useEffect(() => {
    loadworkers();
  }, []);
  const [workers, setWorkers] = useState(null);
  const loadworkers = () => {
    try {
      const role = "worker";

      retrieveUsersRol(sessionStorage.token, role)
        .then((workers) => {
          setWorkers(workers);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handelsaveJob = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const description = event.target.description.value;
    const address = event.target.address.value;
    const workers = event.target.workers.value;

    try {
      addJob(sessionStorage.token, title, description, address, workers)
        .then((job) => {
          toast.success(`save`);
        })

        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error) {}
  };

  return (
    <div>
      <form className="border_radius_medium" onSubmit={handelsaveJob}>
        <div className="gridTwo_reverse">
          <input className="borderDawn" type="hidden" name="jobId" />
          <label>Title :</label>
          <input className="borderDawn" type="text" name="title" />
          <label>Des. :</label>
          <input className="borderDawn" type="text" name="description" />
          <label>Add. :</label>
          <input className="borderDawn" type="text" name="address" />
          <label>Workers :</label>
          {workers && (
            <select name="workers">
              {workers.map((worker) => (
                <option key={worker._id} value={worker.name}>
                  {worker.name}
                </option>
              ))}
            </select>
          )}
          <button className="btn_small" type="onSubmit">
            <img src={newJob} alt=""></img>
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
