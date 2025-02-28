
import { jobList } from "../../Data/JobsData"
import JobCard from "../FindJobs/JobCard"


const CompanyJob = () => {
  return (
    <div>
       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
         {
        jobList.map((item, index) => ( index < 6 && 
          <JobCard key={index} {...item}/>
        ))
    }
    </div>
    </div>
  )
}

export default CompanyJob
