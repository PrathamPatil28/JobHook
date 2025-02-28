import { Button, TextInput } from "@mantine/core"
import fields from "../../Data/Profile"
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";



const CertiInput = (props: any) => {
    const select = fields;
    const [IssueDate, SetIssueDate] = useState<Date | null>(new Date());
    return (
        <div className="flex flex-col gap-5">
            <div className="text-lg font-semibold">Add Certificate</div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-10 [&>*]:w-1/2">
                    <TextInput className=""
                        label="Title"
                        withAsterisk
                        placeholder="Enter Title"
                    />
                    <SelectInput {...select[1]} />

                </div>

                <div className="flex gap-10 [&>*]:w-1/2">
                    <MonthPickerInput maxDate={new Date()} withAsterisk label="Issue Date" placeholder="Pick Date" value={IssueDate} onChange={SetIssueDate} />
                    <TextInput className=""
                        label="Certificate ID"
                        withAsterisk
                        placeholder="Enter Certificate ID"
                    />
                </div>

                <div className="flex gap-5">
                    <Button onClick={() => props.setEdit(false)} variant="outline">Save</Button>
                    <Button onClick={() => props.setEdit(false)} color="red.8" variant="outline">Cancel</Button>
                </div>
            </div>
        </div>

    )
}

export default CertiInput
