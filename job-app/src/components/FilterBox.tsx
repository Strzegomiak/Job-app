import MainFilter from "./MainFilter";
import SortFilter from "./SortFilter";
import SortBox from "./SortFilter";

const FilterBox = (props: any) => {
  return (
    <div className="bg-gray-100 flex w-full h-1/5 -mx-48 justify-center flex-col rounded-xl py-10">
      <MainFilter passDataFromMain={props.passDataFromMain} />
      <SortFilter />
    </div>
  );
};

export default FilterBox;
