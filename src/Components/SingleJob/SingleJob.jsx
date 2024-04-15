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
            <img src={logo} alt="" />
        </div>
    );
};

export default SingleJob;