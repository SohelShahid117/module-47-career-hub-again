const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    else{
        return []
    }
}


const saveJobApplication = (id) => {
    const storedJobApplicationsss =getStoredJobApplication();
    const exists = storedJobApplicationsss.find((jobId) => jobId === id)
    if(!exists){
        storedJobApplicationsss.push(id)
        localStorage.setItem('job-applications',JSON.stringify(storedJobApplicationsss))
    }

}

export {getStoredJobApplication,saveJobApplication};

//47-7 Store Applied Jobs To Local Stoage-9 min