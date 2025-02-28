import { Divider, RangeSlider } from "@mantine/core"

import MultiSelectCreatable from "./MultiSelectCreateTable"
import { useState } from "react"
import { dropdownData } from "../../Data/JobsData"

const Searchbar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100])

  return (
    <div className="flex gap-2 px-6 py-8 ">
      {
        dropdownData.map((item, index) => (
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

export default Searchbar
