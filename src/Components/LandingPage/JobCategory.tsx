import { Carousel } from "@mantine/carousel"
import { jobCategory } from "../../Data/Data"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"


const JobCategory = () => {
  return (
    <div>
      <div className="mt-20 pb-5 text-center">
        <div className="text-4xl font-semibold mb-3 text-mine-shaft-100">Browse <span className="text-bright-sun-400">Job+</span>Category</div>
        <div className="text-lg mx-auto mb-10 text-mine-shaft-300 text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
      </div>

      <Carousel slideSize="22%" slideGap="md" loop className="[&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 "
              nextControlIcon={<IconArrowRight className="h-8 w-8" />}
              previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
      >
        {
          jobCategory.map((category) =>
            <Carousel.Slide key={category.name}>
              <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-5 !shadow-bright-sun-400 transition duration-300 ease-in-out">
                <div className="p-2 bg-bright-sun-300 rounded-full">
                  <img className="w-8 h-8" src={`/Category/${category.name}.png`} alt={category.name} />
                </div>
                <div className="text-mine-shaft-100 text-lx font-semibold ">{category.name}</div>
                <div className="text-mine-shaft-300 text-center font-semibold text-sm">{category.desc}</div>
                <div className="text-bright-sun-300">{category.jobs} new job posted</div>
              </div>
            </Carousel.Slide>
          )
        }
      </Carousel>
    </div>
  )
}

export default JobCategory
