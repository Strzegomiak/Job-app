import { useState } from "react";
import MainFilter from "./MainFilter";
import SortFilter from "./SortFilter";
import { IFormInput, PropsSortValue } from "../types/types";

interface FilteBoxProps {
  passDataFromMain: (inputVaue: IFormInput, sortValue: PropsSortValue) => void;
}

const FilterBox: React.FC<FilteBoxProps> = (props) => {
  const [selectValue, setSelectValue] = useState({
    categories: "",
    type: "",
    level: "",
  });

  const passDataFormSort = (sortValue: PropsSortValue) => {
    const selectValue = {
      categories: sortValue.categories,
      type: sortValue.type,
      level: sortValue.level,
    };
    setSelectValue(selectValue);
  };

  let yyy: string[] | undefined;

  const xxx = (inputs = null) => {
    yyy = inputs;
  };

  return (
    <div className="bg-gray-100 flex w-full h-1/5 -mx-48 justify-center flex-col rounded-xl py-10">
      <MainFilter
        passDataFromMain={props.passDataFromMain}
        selectValue={selectValue}
      />
      <SortFilter
        passDataFormSort={passDataFormSort}
        passDataFromMain={props.passDataFromMain}
        xxx={xxx}
      />
    </div>
  );
};

export default FilterBox;
