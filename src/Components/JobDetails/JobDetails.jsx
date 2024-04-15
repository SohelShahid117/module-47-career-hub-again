import React from "react";

import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  //   const { contacts } = useLoaderData();
  //   const { jobs } = useLoaderData();

  const { id } = useParams();
  const job = jobs.find((jb) => jb.id == id);
  console.log(id, jobs, job);

  return (
    <div>
      <h2>Job ID : {id}</h2>
      <h2>Job Details of : {job.job_title}</h2>
      <div className="grid gap-5 md:grid-cols-4">
        <div className="border md:col-span-3 border-red-700 rounded">
          <h2 className="text-6xl">Details coming here</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border p-5">
          <h2 className="text-4xl">Description everything</h2>
          <button className="btn btn-primary">Submit Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

//47-6 Load Job Details Page And Display --- from 9 min
