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
    </div>
  );
};

export default JobDetails;

//47-6 Load Job Details Page And Display --- from 9 min
