import { Divider, Input, RangeSlider } from "@mantine/core"

import { useState } from "react"
import MultiSelectCreatable from "../FindJobs/MultiSelectCreateTable"
import { searchFields } from "../../Data/TalentData"
import { IconUserCircle } from "@tabler/icons-react"


const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100])

  return (
    <div className="flex px-6 py-8 items-center">

        <div className="flex items-center">
            <div className="text-bright-sun-400 mr-2 bg-mine-shaft-700 rounded-full p-1">
                <IconUserCircle  size={20} />
            </div>
            <Input variant="unstyled" className="[&_input]:!placeholder-mine-shaft-300" placeholder="Talent Name" />
        </div>
        <Divider mr="xs" size="sm" orientation="vertical" />

      {
        searchFields.map((item, index) => (
          <div key={index} className="w-1/5">
            <MultiSelectCreatable {...item}/>
            <Divider mr="xs" size="sm" orientation="vertical" />
          </div>
        ))
      }
      <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
       
          <div className="flex text-sm justify-between">
            <div>Salary</div>
            <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
          </div>
        <RangeSlider 
         labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}  
        color="bright-sun.4" size="xs" value={value} onChange={setValue} />
      </div>

       
 
    </div>
  )
}

export default SearchBar
