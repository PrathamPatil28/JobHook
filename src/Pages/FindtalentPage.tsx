import { Divider } from "@mantine/core"
import SearchBar from "../Components/FindTalent/SearchBar"
import Talent from "../Components/FindTalent/Talent"



const FindtalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
           
           <SearchBar/>
           <Divider mr="xs" size="sm"  mx="md" />
           <Talent/>
    </div>
  )
}

export default FindtalentPage
