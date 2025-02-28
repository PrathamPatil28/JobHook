import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import JobDesc from "../Components/JobDesc/JobDesc"
import Recommended from "../Components/JobDesc/Recommended"



const JobDescPage = () => {
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
              
               <Link className="my-4 inline-block" to="/find-jobs">
              <Button leftSection={<IconArrowLeft size={20}/>}  variant="light">Back</Button>
            </Link>
      
            <div className="flex justify-around  gap-20">
                    <JobDesc/>
                    <Recommended/>
            </div>
        </div>
      )
}

export default JobDescPage
