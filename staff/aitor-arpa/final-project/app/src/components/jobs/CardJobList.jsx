import React, { useEffect, useState } from "react";
import CardJob from "./CardJob";
import retrieveJobs from "../../logic/retrieveJob";
import toast from "react-hot-toast";

export default function CardJobList(props) {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    try {
      retrieveJobs(sessionStorage.token)
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

  return jobs && jobs.length ? (
    <ul>
      {jobs.map((job, i) => (
        <li key={i}>
          <CardJob
            jobid={job.id}
            title={job.title}
            description={job.description}
            address={job.address}
          />
        </li>
      ))}
    </ul>
  ) : (
    <h1 className="center logo">No tienes trabajos asignados</h1>
  );
}
