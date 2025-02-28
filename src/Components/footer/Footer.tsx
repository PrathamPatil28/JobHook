import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react"
import { footerLinks } from "../../Data/Data"
import { useLocation } from "react-router-dom";


const Footer = () => {
    const location = useLocation();
    return (
      location.pathname!=="/signup" &&  location.pathname!=="/login"?
        <div className="pt-20 pb-5  flex justify-around gap-5  bg-mine-shaft-950 font-['poppins']">
            <div className="w-1/4 flex flex-col  gap-4 ">

                <div className="flex items-center gap-1 text-bright-sun-400">

                    <IconAnchor className="h-6 w-6" stroke={2.5} />
                    <div className="text-xl font-extrabold">
                        jobHook
                    </div>
                </div>
                <div className="text-sm text-mine-shaft-200">
                    Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
                </div>

                <div className="flex gap-4 text-bright-sun-400">
                    <div className="bg-mine-shaft-700 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-900"><IconBrandFacebook /></div>
                    <div className="bg-mine-shaft-700 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-900"><IconBrandInstagram /></div>
                    <div className="bg-mine-shaft-700 p-2 rounded-full cursor-pointer hover:bg-mine-shaft-900"><IconBrandX /></div>
                </div>


            </div>

            {
                footerLinks.map((link, index) =>
                    <div key={index}>
                        <div className="text-lg font-semibold mb-4 text-bright-sun-400">{link.title}</div>
                        {
                            link.links.map((item, index) =>
                                <div className=" mb-1 text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer text-sm hover:translate-x-2 transition duration-300 ease-in-out"
                                    key={index}>{item}</div>
                            )
                        }
                    </div>)
            }
        </div> : <></>
    )
}

export default Footer
