import ResetIcon from '../../images/reset.svg';
import { filterOptions } from '../../utils/FilterOptions';
import Collapsible from '../Collapsible/Collapsible';
import { FilterBodyProps, FilterOptionProps } from './types';

const FilterBody = ({selectedFilters, updateSelectedFilters, initState}: FilterBodyProps) => {

    const handleResetClick = () => {
        updateSelectedFilters(initState);
    }

    return (

        <div className='bg-secondaryGray pt-7 px-5 pb-5'>
            <div className='flex justify-between '>
                <div className='text-white'>
                    Filter data by
                </div>
                <div className='flex' onClick={handleResetClick}>
                    <img src={ResetIcon} alt="Reset Icon" />
                    <span className='text-primaryBlue'>Reset</span>
                </div>
            </div>
            {filterOptions?.map((filterOption: FilterOptionProps) => {
                return <Collapsible key={filterOption.title} filterOption={filterOption} filterType={filterOption.type}
                    selectedFilters={selectedFilters} updateSelectedFilters={updateSelectedFilters} />
            })}
        </div>
    )
}

export default FilterBody;