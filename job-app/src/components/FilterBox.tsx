import { useState } from "react";
import MainFilter from "./MainFilter";
import SortFilter from "./SortFilter";
import { IFormInput, PropsSortValue } from "../types/types";

const FilterBox = () => {
  // const [selectValue, setSelectValue] = useState({
  //   categories: "",
  //   type: "",
  //   level: "",
  // });

  const [isClearAllButtonClilked, setIsClearAllButtonClilked] = useState(false);

  // const passDataFormSort = (sortValue: PropsSortValue) => {
  //   const selectValue = {
  //     categories: sortValue.categories,
  //     type: sortValue.type,
  //     level: sortValue.level,
  //   };
  //   setSelectValue(selectValue);
  // };

  const handleClearAll = () => {
    setIsClearAllButtonClilked(true);
  };

  return (
    <div className="bg-gray-100 flex w-full h-1/5 justify-center flex-col rounded-xl py-10">
      <MainFilter
        isClearAllButtonClilked={isClearAllButtonClilked}
        setIsClearAllButtonClilked={setIsClearAllButtonClilked}
      />
      <SortFilter handleClearAll={handleClearAll} />
    </div>
  );
};

export default FilterBox;
