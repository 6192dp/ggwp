import { useState } from "react";
import CloseIcon from '../../images/close.svg';
import OpenIcon from '../../images/open.svg';
import Checkbox from "../Checkbox/Checkbox";
import { CollapsibleProps } from "../Filter/types";
import RadioGroup from "../RadioGroup/RadioGroup";


const Collapsible = ({ filterOption, filterType, selectedFilters, updateSelectedFilters }: CollapsibleProps) => {
    const [isOpen, updateIsOpen] = useState(true)
    return (
        <div className="bg-primaryGray pt-4 pb-5 pr-6 pl-5">
            <div className="flex justify-between items-center">
                <div className="text-white">{filterOption.title}</div>
                <div onClick={() => updateIsOpen(!isOpen)}>
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