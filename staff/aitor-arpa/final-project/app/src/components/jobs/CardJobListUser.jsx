import React, { useEffect, useState } from "react";
import CardJob from "./CardJob";
import retrieveJobsUser from "../../logic/retrieveClockUser";
import toast from "react-hot-toast";

export default function CardJobList() {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    try {
      retrieveJobsUser(sessionStorage.token)
        .then((jobs) => {
          setJobs(jobs);
        })
        .catch((error) => {
          toast.error(error);
        });
    } catch (error) {
      toast.error(error);
    }
  };
  debugger;
  return jobs && jobs.length <= 0 ? (
    <ul>
      {jobs.map((job) => (
        <li jobId={job.id}>
          <CardJob
            title={job.title}
            description={job.description}
            address={job.address}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>No tienes trabajos asignados</p>
  );
}
