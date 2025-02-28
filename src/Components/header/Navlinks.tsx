import { Link, useLocation } from "react-router-dom"
const Navlinks = () => {
    const links = [
        { name: "Find Jobs", url: "/find-jobs" }, // Leading slash ensures absolute path
        { name: "Find Talents", url: "/find-talents" },
        { name: "Post Jobs", url: "/post-jobs" },
        { name: "Posted Jobs", url: "/posted-jobs" },
        { name: " Jobs History", url: "/job-history" },
        { name: " SignUp", url: "/signup" }
    ];

    const location = useLocation();

    return (
        <div className="flex h-full items-center text-mine-shaft-300 gap-5">
            {
                links.map((link, index) => (
                    <div 
                        key={index}
                        className={`${location.pathname === link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full flex items-center`}
                    >
                        <Link to={link.url}>{link.name}</Link>
                    </div>
                ))
            }
        </div>
    );
}


export default Navlinks
