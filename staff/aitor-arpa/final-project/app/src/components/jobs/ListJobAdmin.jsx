import React, { useEffect, useState } from "react";
import retrieveJobs from "../../logic/retrieveJob";
import toast from "react-hot-toast";
import CardJobAdmin from "./CardJobAdmin";
import "./ListJobAdmin.sass";

export default function CardJobList(props) {
  const [timeStamp, setTimeStamp] = useState(null);
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    loadJobs();
  }, [timeStamp]);
  const handedeletecliked = () => setTimeStamp(Date.now());

  const loadJobs = () => {
    try {
      retrieveJobs(sessionStorage.token)
        .then((jobs) => {
          setJobs(jobs);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return jobs && jobs.length ? (
    <ul className="scroll_Job">
      {jobs.map((job) => (
        <li key={job.id}>
          <CardJobAdmin
            jobid={job.id}
            title={job.title}
            description={job.description}
            address={job.address}
            worker={job.worker.name}
            ondeleteclicked={handedeletecliked}
          />
        </li>
      ))}
    </ul>
  ) : (
    <h1 className="center logo">Dont have jobs </h1>
  );
}
