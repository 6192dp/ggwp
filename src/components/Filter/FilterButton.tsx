import FilterSelectedIcon from '../../images/filter.svg';
import FilterUnselectedIcon from '../../images/filter_u.svg';
import { FilterButtonProps } from './types';

const FilterButton = ({ updateIsFilterOpen, isFilterOpen }: FilterButtonProps) => {

    const toggleFilterButton = () => {
        updateIsFilterOpen(!isFilterOpen)
    }

    if (isFilterOpen) {
        return (
            <div className="flex justify-center	 w-24 h-9 py-3 border bg-primaryBlue rounded-lg	items-center cursor-pointer" onClick={toggleFilterButton}>
                <img src={FilterSelectedIcon} alt="Filter Button" className='mr-2' />
                <div className="text-white text-sm font-semibold">Filter</div>
            </div>)
    }
    return (
        <div className="flex justify-center	 w-24 h-9 py-3 border border-primaryGray rounded-lg	items-center cursor-pointer" onClick={toggleFilterButton}>
            <img src={FilterUnselectedIcon} alt="Filter Button" className='mr-2' />
            <div className="text-primaryBlue text-sm font-semibold">Filter</div>
        </div>)
}

export default FilterButton;