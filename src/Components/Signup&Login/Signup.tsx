import { Anchor, Button, Checkbox, PasswordInput, TextInput } from "@mantine/core"
import { IconAt, IconLock, IconUserSquareRounded } from "@tabler/icons-react"
import { Link } from "react-router-dom"


const Signup = () => {
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">
                Create Account
            </div>
            <TextInput withAsterisk
                label="Enter Your Name"
                leftSection={<IconUserSquareRounded size={16} />}
                placeholder="Enter Your  Name"
            />
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

            <PasswordInput withAsterisk
                leftSection={<IconLock size={16} />}
                label="Enter Your Confirm Password"
                placeholder="Your Confirm Password"
            />

            <Checkbox
                autoContrast
                label={<>I Accept {' '}<Anchor>terms & condition</Anchor> </>}
            />

            <Button variant="filled">Sign Up</Button>

            <div className="mx-auto">Have an already account ?
                 <Link className="text-blue-500 hover:text-blue-400" to={"/login"}> Login</Link>
                 </div>

        </div>
    )
}

export default Signup
