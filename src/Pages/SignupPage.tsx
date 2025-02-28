import { IconAnchor } from "@tabler/icons-react"
import { Link, useLocation } from "react-router-dom"
import Signup from "../Components/Signup&Login/Signup"
import Login from "../Components/Signup&Login/Login"


const SignupPage = () => {
    const location = useLocation();
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden ">
            <div className={`w-[100vw] transition-all ease-in-out duration-1000 h-[100vh] flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
                <Login/>
                <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out bg-mine-shaft-900 ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} flex items-center justify-center flex-col gap-5 `}>
                    <div className="flex items-center gap-2 text-bright-sun-400">

                        <IconAnchor className="h-16 w-16" stroke={2.5} />

                        <Link to={"/"} className="text-6xl font-extrabold" >
                            jobHook
                        </Link>
                    </div>
                    <div className="text-2xl text-mine-shaft-200 font-semibold ">
                        Find the  job made for you
                    </div>
                </div>
                <Signup/>
            </div>
        </div>
    )
}

export default SignupPage
