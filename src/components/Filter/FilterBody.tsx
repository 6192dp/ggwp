import ResetIcon from '../../images/reset.svg';
import { filterOptions } from '../../utils/FilterOptions';
import Collapsible from '../Collapsible/Collapsible';

const FilterBody = () => {

    return (

        <div className='bg-secondaryGray pt-7 px-5 pb-5'>
            <div className='flex justify-between '>
                <div className='text-white'>
                    Filter data by
                </div>
                <div className='flex'>
                    <img src={ResetIcon} alt="Reset Icon" />
                    <span className='text-primaryBlue'>Reset</span>
                </div>
            </div>
            {filterOptions?.map((filterOption) => {
                return <Collapsible filterOption={filterOption} />
            })}
        </div>
    )
}

export default FilterBody;