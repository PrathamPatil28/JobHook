import { Divider } from "@mantine/core"
import Searchbar from "../Components/FindJobs/Searchbar"
import Job from "../Components/FindJobs/Job"


const FindJob = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
             
            <Searchbar/>
            <Divider mr="xs" size="sm"  mx="md" />
            <Job/>
           
        </div>
    )
}

export default FindJob
