import {  Button, PasswordInput, TextInput } from "@mantine/core"
import { IconAt, IconLock } from "@tabler/icons-react"
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
    <div className="text-2xl font-semibold">
        Login Account
    </div>

    <TextInput withAsterisk
        leftSection={<IconAt size={16} />}
        label="Enter Your email"
        placeholder="Your Email"
    />

    <PasswordInput withAsterisk
        leftSection={<IconLock size={16} />}
        label="Enter Your Password"
        placeholder="Your Password"
    />

    

    <Button variant="filled">Login</Button>

    <div className="mx-auto">Don't have an account ?
         <Link className="text-blue-500 hover:text-blue-400" to={"/signup"}> Sign Up</Link>
         </div>

</div>
  )
}

export default Login
