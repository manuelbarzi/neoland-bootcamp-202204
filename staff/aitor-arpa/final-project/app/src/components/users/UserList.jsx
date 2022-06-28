import { useState, useEffect } from "react";
import retrieveUsersRol from "../../logic/retrieveUsersRol";
import toast from "react-hot-toast";

export default function UserList(props) {
  const [workers, setWorkers] = useState(null);
  useEffect(() => {
    loadworkers();
  }, []);

  const loadworkers = () => {
    try {
      const role = "worker";
      debugger;
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

  return (
    workers && (
      <select name="workers">
        {workers.map((worker) => (
          <option key={worker.id} value={worker.name}>
            {worker.name}
          </option>
        ))}
      </select>
    )
  );
}
