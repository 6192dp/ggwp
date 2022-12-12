import { useState } from "react";
import FilterBody from "./components/Filter/FilterBody";
import FilterButton from "./components/Filter/FilterButton";
import FilterTile from "./components/Filter/FilterTile";

const initState = { severity: [''], time: '' }

function App() {
  const [isFilterOpen, updateIsFilterOpen] = useState(false);
  const [selectedFilters, updateSelectedFilters] = useState({ ...initState });

  const handleCancelClick = (item: string, label: string) => {
    if (label === 'Time') {
      const temp = { ...selectedFilters };
      temp.time = '';
      updateSelectedFilters(temp);
    } else {
      const copy = { ...selectedFilters };
      let temp = copy.severity;
      temp = temp.filter(i => i !== item);
      copy.severity = temp;
      updateSelectedFilters(copy);

    }
  }


  return (
    <div className="mt-3 ml-3.5">
      <div className="mb-3.5 flex flex-wrap gap-y-2.5">
        <FilterButton isFilterOpen={isFilterOpen} updateIsFilterOpen={updateIsFilterOpen} />
        {selectedFilters.severity?.map(item => <FilterTile key={item} item={item} label="Severity" handleCancelClick={handleCancelClick} />)}
        <FilterTile item={selectedFilters.time} label="Time" handleCancelClick={handleCancelClick} />
      </div>

      {isFilterOpen ?
        <FilterBody updateSelectedFilters={updateSelectedFilters} selectedFilters={selectedFilters} initState={initState} />
        : <div />}
    </div>
  );
}

export default App;
