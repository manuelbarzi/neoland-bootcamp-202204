import React, { useEffect, useState } from "react";
import CardJob from "./CardJob";
import retrieveJobs from "../../logic/retrieveJob";
import toast from "react-hot-toast";




export default function CardJobList() {
  const [jobs, setJobs] = useState(null)
  useEffect(() => {
    loadJobs()
  }, [])

  const loadJobs = () => {
    retrieveJobs(sessionStorage.token)
      .then(jobs => {

        setJobs(jobs)

      })
      .catch(error => {
        toast.error(error)

      })

  }

  return (jobs && jobs.length ?

    <ul>
      {jobs.map(job => <li jobId={job.id}>
        <CardJob  title={job.title} description={job.description} address={job.address} />
      </li>)}
    </ul>
    :
    <p>No tienes trabajos asignados</p>

  )

}

