import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
//47-3 Load Jobs Data For The Page
//47-4 Set Page Layout And Display Featured Jobs

const SingleJob = ({ job }) => {
  console.log(job);
  const {
    id,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
    company_name,
    logo,
  } = job;
  console.log(company_name);
  return (
    <div>
      {/* <h2>Hi</h2> */}
      {/* <img src="" alt="" srcset="" /> */}
      {/* <img src={logo} alt="" /> */}

      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={logo} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body  text-center">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-sky-800 mr-4 text-blue-600">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-sky-800 mr-4 text-blue-600">
              {job_type}
            </button>
          </div>
          <div className="flex">
            <h2 className="text-2xl flex items-center mt-4 mr-6">
              <MdOutlineLocationOn className="mr-1" />
              {location}
            </h2>
            <h2 className="text-2xl flex items-center mt-4 ">
              <BsCurrencyDollar className="mr-1" />
              <span>Salary: {salary} </span>
            </h2>
          </div>
          <div className="card-actions">
            {/* <button className="btn btn-primary">View Details</button> */}
            <Link to={`/SingleJob/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
