
import Companies from "../Components/LandingPage/Companies"
import Dreamjob from "../Components/LandingPage/DreamJob"
import JobCategory from "../Components/LandingPage/JobCategory"
import Subscribe from "../Components/LandingPage/Subscribe"
import Testimonials from "../Components/LandingPage/Testimonials"
import Working from "../Components/LandingPage/Working"




const homePage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
         <Dreamjob/>
        <Companies/>
        <JobCategory/>
        <Working/>
        <Testimonials/>
        <Subscribe/>
    </div>
  )
}

export default homePage
