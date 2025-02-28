import { jobList } from "../../Data/JobsData"
import JobCard from "../FindJobs/JobCard"


const Recommended = () => {
    return (
        <div>
          <div className="text-xl font-semibold mb-3">
            Recommended Jobs
          </div>
          <div className="flex flex-col flex-wrap gap-5">
            {
                jobList.map((job:any, index:any) => index < 6 && 
                    <JobCard  key={index} {...job} />
                )
            }
          </div>
        </div>
      )
}

export default Recommended
