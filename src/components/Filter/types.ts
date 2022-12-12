export type FilterOptionProps = {
    title: string;
    options: string[];
    type?: string;
}

export interface FilterButtonProps {
    isFilterOpen: boolean,
    updateIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>,

}

export type SelectedFilters = {
    time: string,
    severity:  string[]
}
export interface FilterBodyProps {
    selectedFilters: SelectedFilters,
    updateSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>,
    initState: SelectedFilters
}

export interface FilterOptions {
    selectedFilters: SelectedFilters,
    updateSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>,
    options?: string[]
    option?: string
}

export interface CollapsibleProps {
    selectedFilters: SelectedFilters,
    updateSelectedFilters: React.Dispatch<React.SetStateAction<SelectedFilters>>,
    filterOption: FilterOptionProps,
    filterType?: string
}

export interface FilterTileProps{
    item: string,
    label: string,
    handleCancelClick: any
}