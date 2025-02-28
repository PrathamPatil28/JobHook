import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../../Data/Profile"
import SelectInput from "./SelectInput"
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
    const select = fields;
    const [desc, setDesc] = useState("As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.")
    const [startDate, SetStartDate] = useState<Date | null>(new Date());
    const [endDate, SetEndDate] = useState<Date | null>(null);
    const [checked, setChecked] = useState(false);
    return (
        <div className="flex flex-col gap-5">
            <div className="text-lg font-semibold">{props.add?"Add Experience":"Edit Experience"}</div>
            <div className="flex gap-10 [&>*]:w-1/2">
                <SelectInput  {...select[0]} />
                <SelectInput {...select[1]} />

            </div>
            <SelectInput {...select[2]} />
            <Textarea label="Summary" autosize minRows={3} placeholder="Enter About Your Job"
                value={desc}
                onChange={(event) => setDesc(event.currentTarget.value)} />

            <div className="flex gap-10 [&>*]:w-1/2">
                <MonthPickerInput maxDate={endDate || undefined} withAsterisk label="Start Date" placeholder="Pick Date" value={startDate} onChange={SetStartDate} />
                <MonthPickerInput disabled={checked} minDate={startDate || undefined} maxDate={new Date()} withAsterisk label="End Date" placeholder="Pick Date" value={endDate} onChange={SetEndDate} />
               
            </div>
            <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    autoContrast
                    label="Currently Working here"
                />
                <div className="flex gap-5">
                <Button onClick={()=>props.setEdit(false)} variant="outline">Save</Button>
                <Button onClick={()=>props.setEdit(false)} color="red.8" variant="outline">Cancel</Button>
                </div>
               
        </div>

    )
}

export default ExpInput
