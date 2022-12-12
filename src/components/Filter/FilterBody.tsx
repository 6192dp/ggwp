import ResetIcon from '../../images/reset.svg';
import { filterOptions } from '../../utils/FilterOptions';
import Collapsible from '../Collapsible/Collapsible';
import { FilterBodyProps, FilterOptionProps } from './types';

const FilterBody = ({selectedFilters, updateSelectedFilters, initState}: FilterBodyProps) => {

    const handleResetClick = () => {
        updateSelectedFilters(initState);
    }

    return (

        <div className='bg-secondaryGray pt-7 px-5 pb-1 rounded-xl w-96'>
            <div className='flex justify-between mb-7 items-center'>
                <div className='text-white font-medium text-lg'>
                    Filter data by
                </div>
                <div className='flex items-center cursor-pointer' onClick={handleResetClick}>
                    <img src={ResetIcon} alt="Reset Icon" className='h-3'/>
                    <span className='text-primaryBlue font-semibold ml-2 text-sm font-semibold'>Reset</span>
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