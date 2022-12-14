import { useState } from "react";
import CloseIcon from '../../images/close.svg';
import OpenIcon from '../../images/open.svg';
import Checkbox from "../Checkbox/Checkbox";
import { CollapsibleProps } from "../Filter/types";
import RadioGroup from "../RadioGroup/RadioGroup";


const Collapsible = ({ filterOption, filterType, selectedFilters, updateSelectedFilters }: CollapsibleProps) => {
    const [isOpen, updateIsOpen] = useState(true)
    return (
        <div className="bg-primaryGray pt-4 pb-1 pr-6 pl-5 mb-4 rounded-lg	bg-primaryDark">
            <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => updateIsOpen(!isOpen)}>
                <div className="text-white font-medium">{filterOption.title}</div>
                <div>
                    {isOpen ? <img src={CloseIcon} alt="Close Icon" /> : <img src={OpenIcon} alt="Open Icon" />}
                </div>
            </div>
            {filterType === 'checkbox' ?
                isOpen && filterOption.options?.map((option: string) => {
                    return <Checkbox key={option} option={option} selectedFilters={selectedFilters} updateSelectedFilters={updateSelectedFilters} />
                })
                : isOpen && <RadioGroup options={filterOption.options} selectedFilters={selectedFilters} updateSelectedFilters={updateSelectedFilters} />}
        </div>

    )
}

export default Collapsible;