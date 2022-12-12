import { useState } from "react";
import FilterBody from "./components/Filter/FilterBody";
import FilterButton from "./components/Filter/FilterButton";

const initState = { severity: [''], time: '' }

function App() {
  const [isFilterOpen, updateIsFilterOpen] = useState(false);
  const [selectedFilters, updateSelectedFilters] = useState({...initState});


  return (
    <>
      <FilterButton isFilterOpen={isFilterOpen} updateIsFilterOpen={updateIsFilterOpen} />
      {isFilterOpen ? <FilterBody updateSelectedFilters={updateSelectedFilters} selectedFilters={selectedFilters} initState={initState} /> : <div />}
    </>
  );
}

export default App;
