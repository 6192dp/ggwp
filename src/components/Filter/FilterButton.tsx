import FilterSelectedIcon from '../../images/filter.svg';
import FilterUnselectedIcon from '../../images/filter_u.svg';
import { FilterButtonProps } from './types';

const FilterButton = ({ updateIsFilterOpen, isFilterOpen }: FilterButtonProps) => {

    const toggleFilterButton = () => {
        updateIsFilterOpen(!isFilterOpen)
    }

    if (isFilterOpen) {
        return (
            <div className="flex justify-center	 w-24 h-9 py-3 border bg-primaryBlue " onClick={toggleFilterButton}>
                <img src={FilterSelectedIcon} alt="Filter Button" />
                <div className="text-white">Filter</div>
            </div>)
    }
    return (
        <div className="flex justify-center	 w-24 h-9 py-3 border border-primaryGray " onClick={toggleFilterButton}>
            <img src={FilterUnselectedIcon} alt="Filter Button" />
            <div className="text-primaryBlue">Filter</div>
        </div>)
}

export default FilterButton;