import { Tabs } from "@mantine/core"
import { jobList } from "../../Data/JobsData"
import Cards from "./Cards"



const JobHistory = () => {
    return (
        <div>
            <div className="text-2xl font-semibold mb-5 ">
                saved History
            </div>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="applied" >
                    <Tabs.List className="[&_button]:!text-xl font-semibold mb-5 [&_button[data-active='true']]:!text-bright-sun-400">
                        <Tabs.Tab value="applied">Applied</Tabs.Tab>
                        <Tabs.Tab value="saved">Saved</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="interviewing">interviewing</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="applied">
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                            {
                                jobList.map((item, index) => (
                                    <Cards key={index} {...item} applied />
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="saved">
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                            {
                                jobList.map((item, index) => (
                                    <Cards key={index} {...item} saved />
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered"><div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {
                            jobList.map((item, index) => (
                                <Cards key={index} {...item} offered />
                            ))
                        }
                    </div></Tabs.Panel>
                    <Tabs.Panel value="interviewing">
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                            {
                                jobList.map((item, index) => (
                                    <Cards key={index} {...item} interviewing />
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}

export default JobHistory
