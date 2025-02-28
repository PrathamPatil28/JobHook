
import { talents } from "../../Data/TalentData"
import TalentCard from "../FindTalent/TalentCard"


const CompanyEmployee = () => {
  return (
    <div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {
          talents.map((talent, index) => ( index < 6 && 
            <TalentCard key={index} {...talent}  />
          ))
        }
      </div>
    </div>
  )
}

export default CompanyEmployee
