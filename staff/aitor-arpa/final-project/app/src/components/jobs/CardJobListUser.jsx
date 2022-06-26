import React, { useEffect, useState } from "react";
import CardJob from "./CardJob";
import retrieveJobsUser from "../../logic/retrieveJobUser";
import toast from "react-hot-toast";
import "./CardJobListUser.sass";

export default function CardJobListUser(props) {
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

  return jobs && jobs.length >= 0 ? (
    <ul className="scroll-container">
      {jobs.map((job, i) => (
        <li key={i}>
          <CardJob
            jobid={job._id}
            title={job.title}
            description={job.description}
            address={job.address}
          />
        </li>
      ))}
    </ul>
  ) : (
    <h1 className="Center logo">No tienes trabajos asignados</h1>
  );
}
