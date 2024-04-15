import React from 'react';
//47-3 Load Jobs Data For The Page

const SingleJob = ({job}) => {
    console.log(job)
    const {company_name,contact_information,logo} = job
    console.log(company_name);
    return (
        <div>
            {/* <h2>Hi</h2> */}
            {/* <img src="" alt="" srcset="" /> */}
            {/* <img src={logo} alt="" /> */}

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={logo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default SingleJob;