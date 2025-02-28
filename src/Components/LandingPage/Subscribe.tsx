import { Button, Input } from "@mantine/core"


const Subscribe = () => {
  return (
    <div className="mt-20  gap-3  flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
       
       <div className="text-4xl w-2/5 text-center font-semibold  text-mine-shaft-100">Never Wants to Miss Any  <span className="text-bright-sun-400">Job News?</span></div>
        <div className="flex gap-4 bg-mine-shaft-800 px-3 py-2 rounded-xl items-center">
            <Input
              variant="unstyled"
              placeholder="Your@email.com"
              size="xl"
              styles={{
                input: {
                  color: '#cccccc', // text-mine-shaft-200
                  fontWeight: '600', // font-semibold
                },
              }}
            />
            <Button className="!rounded-lg" color="bright-sun.4" variant="filled" size="lg">SubsCribe</Button>
        </div>
    </div>
  )
}

export default Subscribe
