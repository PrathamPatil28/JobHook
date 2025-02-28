import {  Indicator } from "@mantine/core"
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react"

import Navlinks from "./Navlinks"
import { Link, useLocation } from "react-router-dom"
import ProfileMenu from "./ProfileMenu"


const Header = () => {
   const location = useLocation();
  return (
    location.pathname!=="/signup" &&  location.pathname!=="/login" ?
    <div className="w-full  bg-mine-shaft-900 font-['poppins'] h-24 px-6 text-white flex justify-between items-center cursor-pointer">

      <div className="flex items-center gap-2 text-bright-sun-400">

        <IconAnchor className="h-8 w-8" stroke={2.5} />
      
        <Link to={"/"} className="text-3xl font-extrabold" >
         jobHook
        </Link>
      </div>

   
       {Navlinks()}

      <div className="flex gap-5 items-center">
      
     
      <ProfileMenu/>
      <div className="bg-mine-shaft-900 p-1 rounded-full">
      <IconSettings size={24} stroke={1.5} />
      </div>

      <div className="bg-mine-shaft-900 p-1 rounded-full">
      <Indicator color="bright-sun.4" size={10} processing offset={6}> 
      <IconBell size={24} stroke={1.5} />
      </Indicator>
      </div>
      </div>
    </div> :<></>
  )
}

export default Header

