import { Button } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import {  useNavigate } from "react-router-dom"
import Company from "../Components/CompanyProfile/Company";
import SimilerCompanies from "../Components/CompanyProfile/SimilerCompanies";


const CompanyPage = () => {
     const navigate = useNavigate();
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
              
              <Button my="md" onClick={()=> navigate(-1)} leftSection={<IconArrowLeft size={20}/>}  variant="light">Back</Button>
            
      
            <div className="flex  gap-20">
                   <Company/>
                   <SimilerCompanies/>
            </div>
        </div>
      )
}

export default CompanyPage
