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
                            <label className="text-secondaryWhite text-sm flex items-center mb-3.5">
                                <input type="radio" className="mr-2 cursor-pointer"
                                    checked={selectedFilters.time === option} onChange={() => handleRadioClicked(option)} />
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