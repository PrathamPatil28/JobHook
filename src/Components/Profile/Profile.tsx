import { ActionIcon, Divider, TagsInput, Textarea } from "@mantine/core"
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil,IconPlus } from "@tabler/icons-react"
import ExpCard from "./ExpCard"
import CertiCard from "./CertiCard"
import { useState } from "react"
import SelectInput from "./SelectInput"
import fields from "../../Data/Profile"
import ExpInput from "./ExpInput"
import CertiInput from "./CertiInput"



const profile = {
    name: "Jarrod Wood",
    role: "Software Engineer",
    company: "Google",
    location: "New York, United States",
    about: "As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.",

    experience: [
        {
            title: "Software Engineer III",
            company: "Google",
            location: "New York, United States",
            startDate: "Apr 2022",
            endDate: "Present",
            description: "As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process."
        },
        {
            title: "Software Engineer",
            company: "Microsoft",
            location: "Seattle, United States",
            startDate: "Jun 2018",
            endDate: "Mar 2022",
            description: "At Microsoft, I worked on developing and optimizing cloud-based applications, focusing on enhancing performance and scalability. I collaborated with product managers and designers to create innovative features that improved user engagement. My responsibilities included writing clean, maintainable code, performing code reviews, and mentoring junior developers. I played a key role in migrating legacy applications to modern cloud infrastructure, resulting in significant cost savings and improved efficiency."
        }
    ],
    certifications: [
        {
            name: "Google Professional Cloud Architect",
            issuer: "Google",
            issueDate: "Aug 2023",
            certificateId: "CB72982GG"
        },
        {
            name: "Microsoft Certified: Azure Solutions Architect Expert",
            issuer: "Microsoft",
            issueDate: "May 2022",
            certificateId: "MS12345AZ"
        }
    ]

}




const Profile = () => {
    const [edit, setEdit] = useState([false, false, false, false, false]);
    const [skills, setSkills] = useState(["React", "SpringBoot", "MongoDB", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MySQL", "Python", "Django", "Figma", "Sketch", "Docker", "AWS"])
    const select = fields
    const [addExp, setAddExp] =useState(false)
    const [addCerti, setAddCerti] =useState(false)
    const [about, setAbout] = useState('As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.');
    const handleEdit = (index: any) => {
        const newEdit = [...edit];
        newEdit[index] = !newEdit[index]
        setEdit(newEdit);
        console.log(edit);

    }

    return (
        <div className="w-4/5 mx-auto ">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="rounded-full mb-5 w-48 h-48 -bottom-1/3 absolute left-3 border-mine-shaft-800 border-8" src="/avatar.png" alt="" />
            </div>
            <div className="px-3 mt-18">
                <div className="text-3xl font-semibold flex justify-between">{profile.name}
                    <ActionIcon size="lg" variant="subtle" onClick={() => handleEdit(0)} >
                        {edit[0] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>
                </div>
                {
                    edit[0] ? <>
                        <div className="flex gap-10 [&>*]:w-1/2">
                            <SelectInput {...select[0]} />
                            <SelectInput {...select[1]} />

                        </div>
                        <SelectInput {...select[2]} />
                    </> : <>
                        <div className="text-xl flex gap-1 items-center"><IconBriefcase className="h-5 w-5 " stroke={1.5} /> {profile.role} &bull; {profile.company}</div>
                        <div className="text-lg text-mine-shaft-300 flex gap-1 items-center">
                            <IconMapPin className="w-5 h-5" stroke={1.5} />{profile.location}
                        </div>
                    </>
                }


            </div>
            <Divider mr="xs" my='xl' size="sm" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between ">About <ActionIcon size="lg" variant="subtle" onClick={() => handleEdit(1)} >
                    {edit[1] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                </ActionIcon></div>

                {
                    edit[1] ? <Textarea autosize minRows={3} placeholder="Enter About Your Self"
                        value={about}
                        onChange={(event) => setAbout(event.currentTarget.value)}
                    /> : <div className="text-sm text-mine-shaft-300 text-justify">
                        {about}
                    </div>
                }


            </div>


            <Divider mr='xs' my='xl' size="sm" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-3 flex justify-between ">Skills <ActionIcon size="lg" variant="subtle" onClick={() => handleEdit(2)} >
                    {edit[2] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                </ActionIcon></div>
                {
                    edit[2] ? <TagsInput
                        value={skills} onChange={setSkills}
                        placeholder="Add Skills"
                        splitChars={[',', ' ', '|']}
                    /> : <div className="text-sm text-mine-shaft-300 text-justify">
                        <div className="flex flex-wrap gap-2 items-center">
                            {
                                skills.map((skill: any, index: any) =>
                                    <div key={index} className="bg-mine-shaft-900 px-3 py-1 text-sm font-medium bg-opacity-15 rounded-3xl  inline-block ">{skill}</div>
                                )
                            }

                        </div>
                    </div>
                }



            </div>
            <Divider mr='xs' my='xl' size="sm" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between ">Experience
                      <div className="flex gap-3">
                    <ActionIcon size="lg" variant="subtle" onClick={() => setAddExp(true)} >
                         <IconPlus className="h-4/5 w-4/5" />
                    </ActionIcon>

                    <ActionIcon size="lg" variant="subtle" onClick={() => handleEdit(3)} >
                        {edit[3] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>

                </div>
                </div>

                <div className="flex flex-col gap-8">

                    {
                        profile.experience.map((exp: any, index: any) =>
                            <ExpCard key={index} {...exp} edit={edit[3]} />
                        )
                    }
                    {addExp&&<ExpInput setEdit={setAddExp} add/>}
                </div>

            </div>

            <Divider mr='xs' my='xl' size="sm" />
            <div className="px-3">
                <div className="text-2xl font-semibold mb-5 flex justify-between ">Certifications <div className="flex gap-3">
                    <ActionIcon size="lg" variant="subtle" onClick={() => setAddCerti(true)} >
                         <IconPlus className="h-4/5 w-4/5" />
                    </ActionIcon>

                    <ActionIcon size="lg" variant="subtle" onClick={() => handleEdit(4)} >
                        {edit[4] ? <IconDeviceFloppy className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
                    </ActionIcon>

                </div>
                
                </div>

                <div className="flex flex-col gap-8">

                    {
                        profile.certifications.map((certi: any, index: any) =>
                            <CertiCard key={index} {...certi} edit={edit[4]}/>
                        )
                    }
                    {
                       addCerti&& <CertiInput setEdit={setAddCerti}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
