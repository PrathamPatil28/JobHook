import PostedJobDesc from "../Components/PostedJob/PostedJobDesc"
import PostedJobs from "../Components/PostedJob/PostedJobs"


const PostedJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
  
        <div className="flex  gap-5">
             <PostedJobs/>
             <PostedJobDesc/>
        </div>
    </div>
  )
}

export default PostedJobPage
