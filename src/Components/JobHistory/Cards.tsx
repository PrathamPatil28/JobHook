import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3 } from "@tabler/icons-react";
import { Link } from "react-router-dom";


const Cards = (props:any) => {
    return (
        <Link to="/jobs" className="bg-mine-shaft-900 p-4 w-72 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] cursor-pointer">
          <div className="flex justify-between ">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-mine-shaft-700 rounded-md">
                <img className="h-7" src={`/Icons/${props.company}.png`} alt={props.comp} />
              </div>
              <div>
                <div className="font-semibold">{props.jobTitle} </div>
                <div className="text-xs text-mine-shaft-200">{props.company} &#x2022; {props.applicants}</div>
              </div>
            </div>
            {props.saved?<IconBookmarkFilled className="text-mine-shaft-300" />:<IconBookmark className="text-mine-shaft-300" />}
          </div>
    
          <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-sm text-xs">
            <div style={{ backgroundColor: '#E0B0FF', color: '#7F00FF' }}>{props.experience}</div>
            <div style={{ backgroundColor: '#98FB98', color: '#089000' }}>{props.jobType}</div>
            <div style={{ backgroundColor: '#EEE8AA', color: '#db6a00' }}>{props.location}</div>
          </div>
    
          <Text lineClamp={3} className="!text-xs text-justify text-mine-shaft-300">
            {/* Text content */}
           {props.description}
          </Text>
    
          <Divider size="xs" color="#999999" />
    
    
          <div className="flex justify-between fons-semibold text-mine-shaft-200">
            <div>&#8377; {props.package}
    
            </div>
            <div className="text-xs text-mine-shaft-400 flex gap-1 items-center">
               <IconClockHour3 className="w-5 h-5" stroke={1.5}/>{props.applied ? "Applied":props.offered?"Interview" :"Posted"} {props.postedDaysAgo} days ago
            </div>
          </div>
          { (props.offered  || props.interviewing) &&  <Divider size="xs" color="#999999" /> }
          {
             props.offered && <div className="flex gap-2" >
              <Button fullWidth color="#007FFF" variant="outline"  >Accept</Button>
              <Button fullWidth color="#FF033E" variant="light"  >Reject</Button>
            </div>
          }

          { 
            props.interviewing&& <div className="flex gap-1  text-sm items-center font-semibold">
            <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5} />  Sun, 28 March &bull; <span className="text-mine-shaft-400">10:00 AM</span>
          </div>
          }
        </Link >
      );
}

export default Cards
