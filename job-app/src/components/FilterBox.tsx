import { useState } from "react";
import MainFilter from "./MainFilter";
import SortFilter from "./SortFilter";
import SortBox from "./SortFilter";

const FilterBox = (props: any) => {
  const [selectValue, setSelectValue] = useState({
    categories: "",
    type: "",
    level: "",
  });

  const passDataFormSort = (sortValue: any) => {
    const selectValue = {
      categories: sortValue.categories,
      type: sortValue.type,
      level: sortValue.level,
    };
    setSelectValue(selectValue);
  };

  return (
    <div className="bg-gray-100 flex w-full h-1/5 -mx-48 justify-center flex-col rounded-xl py-10">
      <MainFilter
        passDataFromMain={props.passDataFromMain}
        selectValue={selectValue}
      />
      <SortFilter passDataFormSort={passDataFormSort} />
    </div>
  );
};

export default FilterBox;
