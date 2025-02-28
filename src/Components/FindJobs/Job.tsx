
import { jobList } from "../../Data/JobsData"
import JobCard from "./JobCard"
import Sort from "./Sort"


const Job = () => {
  return (
    <div className="p-5">
    <div className="flex justify-between">
      <div className="text-2xl font-semibold">Recommended Jobs</div>
         <Sort/>
    </div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
         {
        jobList.map((item, index) => (
          <JobCard key={index} {...item}/>
        ))
    }
    </div>
   
     
    
        </div>
  )
}

export default Job
