import React, { useState, useEffect } from "react";
import SingleJob from "../SingleJob/SingleJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      // .then((data)=>console.log(data))
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs : {jobs.length}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          veritatis cum, aliquid magnam placeat iste aliquam, temporibus fugiat
          impedit natus, accusantium accusamus. Nisi natus aperiam eos id
          voluptatum temporibus sed hic, placeat ad laudantium consequatur.
          Facere vitae natus consequatur pariatur sit! Placeat ea, laborum
          sapiente nemo repellat excepturi! Nemo, assumenda.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* {jobs.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))} */}
        {jobs.slice(0, dataLength).map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
      {/* <div className={dataLength === jobs.length && "hidden"}> */}
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => {
            setDataLength(jobs.length);
          }}
          className="btn btn-primary"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
