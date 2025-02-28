import { Avatar, Button, Divider, Modal, Text, } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconCalendarMonth, IconHeart, IconMapPin } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useRef, useState } from 'react';
import { DateInput, TimeInput } from '@mantine/dates';




const TalentCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-mine-shaft-900 p-4 w-[340px] rounded-xl flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] cursor-pointer">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-700 rounded-full">
            <Avatar size="lg" src={`/${props.image}.png`} alt={props.name} />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name} </div>
            <div className="text-sm text-mine-shaft-200">{props.role} &bull; {props.company}</div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300" />
      </div>

      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-sm text-xs">
        {
          props.topSkills.map((skill: any, index: any) => {
            let style = {};
            if (index % 3 === 0) {
              style = { backgroundColor: '#E0B0FF', color: '#7F00FF' };
            } else if (index % 3 === 1) {
              style = { backgroundColor: '#98FB98', color: '#089000' };
            } else {
              style = { backgroundColor: '#EEE8AA', color: '#db6a00' };
            }
            return <div key={index} style={style}>{skill}</div>;
          })
        }
      </div>

      <Text lineClamp={3} className="!text-xs text-justify text-mine-shaft-300">
        {/* Text content */}
        {props.about}
      </Text>

      <Divider size="xs" color="#999999+" />
       {
          props.invited?<div className="flex gap-1 text-mine-shaft-200 text-sm items-center font-semibold">
            <IconCalendarMonth stroke={1.5} />  Interview : March 11, 2025  10:00 AM
          </div> : 
            <div className="flex justify-between fons-semibold text-mine-shaft-200">
            <div>&#8377; {props.expectedCtc}
    
            </div>
            <div className="text-xs text-mine-shaft-400 flex gap-1 items-center">
              <IconMapPin className="w-5 h-5" stroke={1.5} /> {props.location}
            </div>
          </div>
       }

    
      <Divider size="xs" color="#999999" />
      <div className="flex [&>*]:w-1/2 [&_*]:!p-1">
      {
         !props.invited &&<>
         <Link to="/talent-profile">
          <Button fullWidth color="#0891B2" variant="outline" >Profile</Button>
        </Link>
        <div>
          {props.posted ? <Button onClick={open} rightSection={<IconCalendarMonth className="w-5 h-5" />} fullWidth variant="light" color="#17B169">Schedule</Button>
            : <Button fullWidth color="#4F46E5">Message</Button>}
        </div>
        </>
      }
      {
        props.invited && <>
        <div>
          <Button fullWidth color="#007FFF"  >Accept</Button>
        </div>
        <div>
          <Button fullWidth color="#FF033E"  >Reject</Button>
          </div>
        </>
      }
        

      </div>

      <Modal opened={opened} onClose={close} title="Shedule Interview" centered>
        {/* Modal content */}
        <div className="flex flex-col gap-4">
          <DateInput
            minDate={new Date()}
            value={value}
            onChange={setValue}
            label="Date "
            placeholder="Enter Date"
          />
          
          <TimeInput label="Time" ref={ref} onClick={() => ref.current?.showPicker()} />

          <Button fullWidth color="#018749" >Schedule</Button>

        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
