import { Avatar, Rating } from "@mantine/core"
import { testimonials } from "../../Data/Data"


const Testimonials = () => {
  return (
    <div className="mt-20 pb-5 text-center">
    <div className="text-4xl font-semibold mb-3 text-mine-shaft-100">What  <span className="text-bright-sun-400">User</span> says about us?</div>
     <div className="flex gap-5 items-center justify-evenly">
     {
        testimonials.map((item,index) =>
     <div key={index} className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3 mt-10 rounded-xl">
         <div className="flex gap-2 items-center">
          <Avatar className="!h-14 !w-14 " src="/avatar.png" alt="img1"/>
           <div>
              <div className="text-lg text-mine-shaft-100 font-semibold">{item.name}</div>
              <Rating value={item.rating} fractions={2} readOnly />
           </div>
         </div>
         <div className="text-sm  text-mine-shaft-200">{item.testimonial}</div>
     </div>
     )}</div>
  </div>
  )
}

export default Testimonials
