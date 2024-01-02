import MainFilter from "./MainFilter";
import SortFilter from "./SortFilter";
import SortBox from "./SortFilter";

const FilterBox = () => {
  return (
    <div className="bg-gray-300 flex w-4/5 h-1/5 justify-center flex-col">
      <MainFilter />
      <SortFilter />
    </div>
  );
};

export default FilterBox;
