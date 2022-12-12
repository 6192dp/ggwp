import CancelIcon from '../../images/cross.svg';
import { FilterTileProps } from './types';


const FilterTile = ({ item, label, handleCancelClick }: FilterTileProps) => {

    const handleFilterTileClick = () => {
        handleCancelClick(item, label)
    }

    if (item) {
        return (
            <div className="flex justify-center	 w-40 h-9 py-3 border bg-primaryGray rounded-lg	items-center cursor-pointer mr-1.5 bg-opacity-40"
                onClick={handleFilterTileClick}>
                <img src={CancelIcon} alt="Cancel Filter" className='mr-2' />
                <div className="text-secondaryWhite text-sm font-semibold">{`${label}: ${item}`}</div>
            </div>
        )
    }
    return <div />

}

export default FilterTile;