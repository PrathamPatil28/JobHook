import { Button, CheckIcon, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from "@mantine/core"
import { IconPaperclip } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const ApplyJobComp = () => {

    const [preview, setPreview] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [sec, setSec] = useState(5)
    const navigate = useNavigate();
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleSubmit = () => {
        setSubmit(true)
        let x = 5
        setInterval(() => {
            x--
            setSec(x)
            if (x == 0) navigate('/find-jobs')
        }, 1000);
    }

    return (
        <>
            <LoadingOverlay className="!fixed"
                visible={submit}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 2 }} 
                loaderProps={{ color: '#f99b07', type: 'bars' }}
            />
            <div className="w-2/3 mx-auto">
                <div className="flex justify-between ">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-700 rounded-xl">
                            <img className="h-14" src="/Icons/Google.png" alt="props.comp" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="font-semibold text-2xl">Software Engineer  </div>
                            <div className="text-lg text-mine-shaft-200">Google &bull; 3 day age  &bull; 48 Application </div>
                        </div>
                    </div>
                </div>

                <Divider my="xl" />
                <div className="text-lx font-semibold mb-5">Submit Your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput withAsterisk readOnly={preview} variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                            label="Full Name"
                            placeholder="Enter your full name"
                        />
                        <TextInput withAsterisk readOnly={preview} variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                            label="Email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput withAsterisk hideControls min={0} max={10000000000} clampBehavior="strict" readOnly={preview} variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                            label="Phone Number"
                            placeholder="Enter your phone number"

                        />
                        <TextInput withAsterisk readOnly={preview} variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                            label="Personal Website"
                            placeholder="Enter your website"
                        />
                    </div>
                    <FileInput withAsterisk readOnly={preview} variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        leftSection={<IconPaperclip stroke={1.5} />}
                        label="Attach your CV"
                        placeholder="Your CV"
                        leftSectionPointerEvents="none"
                    />
                    <Textarea withAsterisk readOnly={preview} variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        placeholder="Type Somthing about yourself"
                        label="Cover Letter"
                        autosize
                        minRows={4}
                    />
                    {
                        !preview && <Button onClick={handlePreview} variant="light">Preview</Button>
                    }

                    {
                        preview && <div className="flex gap-10 [&>*]:w-1/2">
                            <Button fullWidth onClick={handlePreview} variant="outline">Edit</Button>
                            <Button fullWidth onClick={handleSubmit} variant="light">Submit</Button>
                        </div>
                    }
                </div>
            </div>

            <Notification icon={<CheckIcon size={20} />}
                color="teal" title="Application Submitted !"
                withBorder className={`!border-bright-sun-400 z-[1001]  !fixed top-0 left-[35%] transition duration-400 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`}
                mt="md" withCloseButton={false}>
                Redirecting to Find Jobs in {sec} seconds...
            </Notification>
        </>
    )
}

export default ApplyJobComp
