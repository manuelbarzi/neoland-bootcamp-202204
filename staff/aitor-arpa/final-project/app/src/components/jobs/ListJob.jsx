import React, { useEffect, useState } from "react";
import CardJob from "./CardJob";
import retrieveJobs from "../../logic/retrieveJob";
import toast from "react-hot-toast";

export default function CardJobList() {
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
          toast.error(error.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return jobs && jobs.length ? (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>
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
    <h1 className="center logo">you have jobs assigned</h1>
  );
}
