import { Avatar, Divider, Tabs } from "@mantine/core"
import { IconMapPin } from "@tabler/icons-react"
import AboutComp from "./AboutComp"
import CompanyJob from "./CompanyJob"
import CompanyEmployee from "./CompanyEmployee"


const Company = () => {
   
    return (
        <div className="w-3/4">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="rounded-3xl w-36 h-36 -bottom-1/4 absolute left-5 p-2 bg-mine-shaft-800 border-mine-shaft-900 border-8" src="/Icons/Google.png" alt="" />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">Google
                    <Avatar.Group>
                        <Avatar src="/avatar.png" />
                        <Avatar src="/avatar1.png" />
                        <Avatar src="/avatar2.png" />
                        <Avatar>+9K</Avatar>
                    </Avatar.Group></div>

                <div className="text-lg text-mine-shaft-300 flex gap-1 items-center">
                    <IconMapPin className="w-5 h-5" stroke={1.5} />New York , USA
                </div>
            </div>
            <Divider mr="xs" my='xl' size="sm" />
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="about" >
                    <Tabs.List className="[&_button]:!text-xl font-semibold mb-5 [&_button[data-active='true']]:!text-bright-sun-400">
                        <Tabs.Tab value="about">About</Tabs.Tab>
                        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                        <Tabs.Tab value="employee">Employee</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
                    <Tabs.Panel value="jobs"><CompanyJob/></Tabs.Panel>
                    <Tabs.Panel value="employee"><CompanyEmployee/></Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default Company
