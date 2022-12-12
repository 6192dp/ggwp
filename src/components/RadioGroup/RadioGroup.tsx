import { useState } from "react";
import { FilterOptionProps } from "../Filter/types";

const RadioGroup = ({ options }: any) => {

    const [selectedValue, updateSelectedValue] = useState(null);

    if (options?.length) {
        return options?.map((option: any) => {
            return (
                <div key={option}>
                    <label className="text-secondaryWhite">
                        <input type="radio" checked={selectedValue === option} onChange={() => updateSelectedValue(option)} />
                        {option}
                    </label>

                </div>
            )
        })
    }
    return <div />

}

export default RadioGroup;