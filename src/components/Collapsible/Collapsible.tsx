import { useState } from "react";
import CloseIcon from '../../images/close.svg';
import OpenIcon from '../../images/open.svg';
import Checkbox from "../Checkbox/Checkbox";
import { FilterOptionProps } from "../Filter/types";


const Collapsible = ({filterOption}:any) => {
    const [isOpen, updateIsOpen] = useState(true)
    return(
        <div className="bg-primaryGray pt-4 pb-5 pr-6 pl-5">
        <div className="flex justify-between items-center">
            <div className="text-white">{filterOption.title}</div>
            <div onClick={() => updateIsOpen(!isOpen)}>{isOpen? <img src={CloseIcon}/> : <img src={OpenIcon}/> }</div>
        </div>
        {isOpen && filterOption.options?.map((option:string) => {
                return(
                    <Checkbox option={option}/>
                )
            }
        )}

        </div>
        
    )
}

export default Collapsible;