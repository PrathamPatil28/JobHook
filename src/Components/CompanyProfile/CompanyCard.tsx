import { ActionIcon } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons-react"



const CompanyCard = (props : any) => {
  return (
    <div>
      <div className="flex justify-between bg-mine-shaft-900 items-center rounded-lg p-2 ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-700 rounded-md">
            <img className="h-7" src={`/Icons/${props.name}.png`} alt={props.comp} />
          </div>
          <div>
            <div className="font-semibold">{props.name} </div>
            <div className="text-xs text-mine-shaft-200">{props.employees}</div>
          </div>
        </div>
        <ActionIcon color="#f99b07" variant="subtle " >
           <IconExternalLink stroke={1.5}/> 
        </ActionIcon>
      </div>
    </div>
  )
}

export default CompanyCard
