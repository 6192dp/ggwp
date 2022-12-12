import { FilterOptions } from "../Filter/types";

const RadioGroup = ({ options, selectedFilters, updateSelectedFilters }: FilterOptions) => {
    const handleRadioClicked = (option: string) => {
        const newFilters = { ...selectedFilters };
        newFilters.time = option;
        updateSelectedFilters(newFilters);
    }

    if (options?.length) {
        return <>
            {
                options.map((option: string) => {
                    return (
                        <div key={option}>
                            <label className="text-secondaryWhite">
                                <input type="radio" checked={selectedFilters.time === option} onChange={() => handleRadioClicked(option)} />
                                {option}
                            </label>

                        </div>
                    )
                })
            }</>
    }
    return <div />

}

export default RadioGroup;