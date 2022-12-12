import { useState } from "react";
import FilterBody from "./components/Filter/FilterBody";
import FilterButton from "./components/Filter/FilterButton";

const initState = { severity: [''], time: '' }

function App() {
  const [isFilterOpen, updateIsFilterOpen] = useState(false);
  const [selectedFilters, updateSelectedFilters] = useState({ ...initState });


  return (
    <div className="mt-3 ml-3.5">
      <div className="mb-3.5">
        <FilterButton isFilterOpen={isFilterOpen} updateIsFilterOpen={updateIsFilterOpen} />
      </div>

      {isFilterOpen ?
        <FilterBody updateSelectedFilters={updateSelectedFilters} selectedFilters={selectedFilters} initState={initState} />
        : <div />}
    </div>
  );
}

export default App;
