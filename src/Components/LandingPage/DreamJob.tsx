import { Avatar, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const Dreamjob = () => {
  return (
    <div className='flex items-center px-20'>
      <div className='flex flex-col width-[45%] gap-10'>
        <div className='text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400 leading-tight'>Find your <span>dream </span><span>job</span> with us</div>
        <div className='text-lg text-mine-shaft-200'>Good life begins with a good company. Start explore thousands of jobs in one place.</div>
        <div className='flex gap-5' >
          <TextInput
            className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />

          <TextInput
            className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100'
            variant="unstyled"
            label="Job Type"
            placeholder="Full Time"
          />
          <div className='flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg hover:bg-bright-sun-500 cursor-pointer'>
            <IconSearch className='w-[85%] h-[85%]' stroke={1.5} />
          </div>
        </div>
      </div>

      <div className='w-[55%] flex justify-center items-center'>
        <div className='w-[30rem] relative'>
          <img src="/Boy.png" alt="boy" />

          <div className='w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md absolute top-[50%] -right-10' >
            <div className='text-center text-sm  mb-2 text-mine-shaft-100'>10K+ get job </div>
            <Avatar.Group>
              <Avatar src="/avatar.png" />
              <Avatar src="/avatar1.png" />
              <Avatar src="/avatar2.png" />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </div>
          <div className='w-fit border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md absolute top-[28%] -left-5 flex flex-col justify-around gap-3' >
          <div className='flex gap-2 items-center'>
              <div className='h-10 w-10 p-1 bg-mine-shaft-800 rounded-lg'>
                <img src="/Icons/Google.png" alt="" />
              </div>
              <div className='text-sm text-mine-shaft-100'>
                <div>Software Enginner</div>
                <div className='text-mine-shaft-200 '>New York</div>
              </div>
            
            </div>


            <div className='flex gap-2 text-mine-shaft-200 text-xs'>
              <span>1 day ago</span>
              <span>120 Applications</span>
            </div>
          </div>
        </div>
        
      </div>


    </div>
  )
}

export default Dreamjob
