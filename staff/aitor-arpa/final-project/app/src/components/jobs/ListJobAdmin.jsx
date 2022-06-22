import React, { useEffect, useState } from "react";

import retrieveJobs from "../../logic/retrieveJob";
import toast from "react-hot-toast";
import CardJobAdmin from "./CardJobAdmin";

export default function CardJobList() {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = () => {
    retrieveJobs(sessionStorage.token)
      .then((jobs) => {
        setJobs(jobs);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return jobs && jobs.length ? (
    <ul>
      {jobs.map((job) => (
        <li jobId={job.id}>
          <CardJobAdmin
            title={job.title}
            description={job.description}
            address={job.address}
            worker={job.workers}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>Dont have jobs </p>
  );
}
