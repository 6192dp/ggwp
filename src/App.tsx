import { useState } from "react";
import FilterBody from "./components/Filter/FilterBody";
import FilterButton from "./components/Filter/FilterButton";

function App() {
  const [isFilterOpen, updateIsFilterOpen] = useState(false);

  return (
    <>
      <FilterButton isFilterOpen={isFilterOpen} updateIsFilterOpen={updateIsFilterOpen} />
      {isFilterOpen ? <FilterBody /> : <div />}
    </>
  );
}

export default App;
