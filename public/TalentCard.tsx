import { Avatar, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconHeart, IconMapPin } from "@tabler/icons-react";

const TalentCard = (props: any) => {
  return (
    <div className="bg-mine-shaft-900 p-4 w-96 rounded-xl flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] cursor-pointer">
      <div className="flex justify-between ">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-700 rounded-full">
            <img  src={`/${props.image}.png`} alt={props.name} />
          </div>
          <div>
            <div className="font-semibold text-lg">{props.name} </div>
            <div className="text-sm text-mine-shaft-200">{props.role} &bull; {props.company}</div>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-300" />
      </div>

      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:rounded-sm text-xs">
        {props.topSkills?.map((skill: any, index: any) => (
          <div key={index} style={{ backgroundColor: '#E0B0FF', color: '#7F00FF' }}>{skill}</div>
        ))}
      </div>

      <Text lineClamp={3} className="!text-xs text-justify text-mine-shaft-300">
        {props.about}
      </Text>

      <Divider size="xs" color="#999999" />

      <div className="flex justify-between fons-semibold text-mine-shaft-200">
        <div>&#8377; {props.expectedCtc}</div>
        <div className="text-xs text-mine-shaft-400 flex gap-1 items-center">
          <IconMapPin className="w-5 h-5" stroke={1.5} /> {props.location}
        </div>
      </div>
      <Divider size="xs" color="#999999" />
      <div className="flex [&>*]:w-1/2 [&_*]:p-1">
        <Link to="/talent-profile">
          <Button fullWidth variant="outline">Profile</Button>
        </Link>
        <div><Button fullWidth variant="light">Message</Button></div>
      </div>
    </div>
  );
};

export default TalentCard;
