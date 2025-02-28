
import { talents } from "../../Data/TalentData"
import Sort from "../FindJobs/Sort"
import TalentCard from "./TalentCard"




const Talent = () => {
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Talents</div>
                <Sort />
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

               {
                talents.map((talent, index) => (
                    <TalentCard key={index} {...talent} />
                ))
               }
            </div>
        </div>
    )
}

export default Talent
