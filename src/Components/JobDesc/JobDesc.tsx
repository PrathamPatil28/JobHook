import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import DOMPurify from "dompurify"
import { card, desc, skills } from "../../Data/JobDescData"

const JobDesc = (props:any) => {
    const data = DOMPurify.sanitize(desc)
    return (
        <div className="w-2/3 ">
            <div className="flex justify-between ">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-700 rounded-xl">
                        <img className="h-14" src="/Icons/Google.png" alt="props.comp" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-2xl">Software Engineer  </div>
                        <div className="text-lg text-mine-shaft-200">Google &bull; 3 day age  &bull; 48 Application </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <Link to="/apply-job">
                        <Button size="sm" variant="light">{props.edit?"Edit":"Apply"}</Button>
                    </Link>
                   {props.edit? <Button size="sm" color="#E32636" variant="outline">Delete</Button> :<IconBookmark className="text-bright-sun-400 cursor-pointer" />}
                </div>
            </div>

            <Divider my="xl" />
            <div className="flex gap-1 justify-between">
                {
                    card.map((item, index) =>

                        <div key={index} className="flex flex-col items-center">
                            <ActionIcon variant="light" color="#f99b07" className="!h-12 !w-12" radius="xl" aria-label="Settings">
                                <item.icon className="h-4/5 w-4/5" stroke={1.5} />
                            </ActionIcon>

                            <div className="text-mine-shaft-300 text-sm">{item.name}</div>
                            <div className="font-semibold">{item.value}</div>
                        </div>
                    )
 
                }
            </div>

            <Divider my="xl" />
            <div>
                <div className="text-lx font-semibold mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        skills.map((skill, index) =>
                            <ActionIcon key={index} variant="light" p="xs" color="#f99b07" className="!h-fit !w-fit font-medium " radius="xl" aria-label="Settings">
                                {skill}
                            </ActionIcon>
                        )
                    }


                </div>
            </div>
            <Divider my="xl" />
            <div dangerouslySetInnerHTML={{ __html: data }} className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold text-mine-shaft-200 [&_p]:text-justify [&_*]:text-mine-shaft-300 [&_li]:marker:text-bright-sun-400 [&_li]:mb-1" >
            </div>
            <Divider my="xl" />
            <div>
                <div className="text-lx font-semibold mb-5">About Company</div>

                <div>
                    <div className="flex justify-between mb-3">
                        <div className="flex gap-2 items-center">
                            <div className="p-3 bg-mine-shaft-700 rounded-xl">
                                <img className="h-8" src="/Icons/Google.png" alt="props.comp" />
                            </div>
                            <div>
                                <div className="font-semibold text-2xl">Google</div>
                                <div className="text-lg text-mine-shaft-200">10k+ Employees</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <Link to="/company">
                                <Button variant="light">Company Page</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="text-mine-shaft-300 text-justify" >Google is a multinational technology company founded in 1998 by Larry Page and Sergey Brin. It specializes in internet-related services, including search, advertising, cloud computing, and AI. Its parent company, Alphabet Inc., oversees various subsidiaries like YouTube, Google Cloud, and Waymo. Google is widely known for its search engine, Android OS, and innovative products like Google Maps and Gmail</div>
                </div>
            </div>
        </div>
    )
}

export default JobDesc
