import { FilterOptions, SelectedFilters } from "../Filter/types";

const Checkbox = ({ option, selectedFilters, updateSelectedFilters }: FilterOptions) => {

    const isFilterIncluded = (option: string) => {
        return selectedFilters?.severity?.includes(option);
    }

    const handleCheckboxClicked = (option: string) => {
        let newFilters: SelectedFilters = Object.assign({}, selectedFilters);
        if (isFilterIncluded(option)) {
            const temp = newFilters?.severity.filter((i: string) => i !== option)
            newFilters.severity = temp;
        }
        else {
            const temp = [...newFilters.severity];
            temp.push(option);
            newFilters.severity = temp;
        };
        updateSelectedFilters(newFilters);
    }

    return (
        <>
            <label className="text-secondaryWhite text-sm flex items-center mb-3.5">
                <input type="checkbox" className="mr-2 cursor-pointer"
                    checked={isFilterIncluded(option!)} onChange={() => handleCheckboxClicked(option!)} />
                {option}
            </label>

        </>
    )
}

export default Checkbox;