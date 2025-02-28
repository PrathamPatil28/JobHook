import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import ExpCard from "./ExpCard"
import CertiCard from "./CertiCard"


const Profile = (props:any) => {
    return (
        <div className="w-2/3 ">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="rounded-full w-48 h-48 -bottom-1/3 absolute left-3 border-mine-shaft-900 border-8" src="/avatar.png" alt="" />
            </div>
            <div className="px-3 mt-18">
                <div className="text-3xl font-semibold flex justify-between">{props.name}<Button color="#4F46E5" >Message</Button></div>
                <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5 " stroke={1.5} /> {props.role} &bull; {props.company}</div>
                <div className="text-lg text-mine-shaft-300 flex gap-1 items-center">
                    <IconMapPin className="w-5 h-5" stroke={1.5} />{props.location}
                </div>
            </div>
              <Divider mr="xs" my='xl'  size="sm"/>
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 ">About</div>
                <div className="text-sm text-mine-shaft-300 text-justify">
                    {props.about}
                </div>
            </div>


            <Divider  mr='xs' my='xl'  size="sm"/>
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 ">Skills</div>
                <div className="text-sm text-mine-shaft-300 text-justify">
                 <div className="flex flex-wrap gap-2 items-center">
                    {
                        props.skills.map((skill:any, index:any) => 
                            <div key={index} className="bg-mine-shaft-900 px-3 py-1 text-sm font-medium bg-opacity-15 rounded-3xl  inline-block ">{skill}</div>
                        )
                    }
                        
                 </div>
                </div>
            </div>
            <Divider  mr='xs' my='xl'  size="sm"/>
            <div className="px-3">
            <div className="text-2xl font-semibold mb-5 ">Experience</div>
             
             <div className="flex flex-col gap-8">
                
                 {
                    props.experience.map((exp:any, index:any) => 
                        <ExpCard key={index} {...exp} /> 
                    )
              } 
                </div>
            
            </div>

            <Divider  mr='xs' my='xl'  size="sm"/>
            <div className="px-3">
            <div className="text-2xl font-semibold mb-5 ">Certifications</div>
                
                <div className="flex flex-col gap-8">
                    
                    {
                        props.certifications.map((certi:any, index:any) => 
                            <CertiCard key={index} {...certi} /> 
                        )
                } 
                    </div>
            </div>
        </div>
    )
}

export default Profile
