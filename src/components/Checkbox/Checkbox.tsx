import { useState } from "react";

const Checkbox = ({option}:any) => {

    const [checked, updateChecked] = useState(false);

    return (
        <div>
            <label className="text-secondaryWhite">
                <input type="checkbox" checked={checked} onChange={() => updateChecked(!checked)} />
                {option}
            </label>

        </div>
    )
}

export default Checkbox;