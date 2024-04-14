import React from 'react';

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState();

    useEffect(()=>{
        fetch('jobs.json')
        .then((res)=>res.json())
        // .then((data)=>console.log(data))
        .then((data)=>setJobs(data))
    },[]);

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-5xl'>Featured Jobs : {jobs.length}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis cum, aliquid magnam placeat iste aliquam, temporibus fugiat impedit natus, accusantium accusamus. Nisi natus aperiam eos id voluptatum temporibus sed hic, placeat ad laudantium consequatur. Facere vitae natus consequatur pariatur sit! Placeat ea, laborum sapiente nemo repellat excepturi! Nemo, assumenda.</p>
            </div>
        </div>
    );
};

export default FeaturedJobs;

//47-3 Load Jobs Data For The Page-8min