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

  const [isClearAllButtonClilked, setIsClearAllButtonClilked] = useState(false);

  const passDataFormSort = (sortValue: PropsSortValue) => {
    const selectValue = {
      categories: sortValue.categories,
      type: sortValue.type,
      level: sortValue.level,
    };
    setSelectValue(selectValue);
  };

  const handleClearAll = () => {
    setIsClearAllButtonClilked(true);
  };

  return (
    <div className="bg-gray-100 flex w-full h-1/5 justify-center flex-col rounded-xl py-10">
      <MainFilter
        passDataFromMain={props.passDataFromMain}
        selectValue={selectValue}
        isClearAllButtonClilked={isClearAllButtonClilked}
        setIsClearAllButtonClilked={setIsClearAllButtonClilked}
      />
      <SortFilter
        passDataFormSort={passDataFormSort}
        passDataFromMain={props.passDataFromMain}
        handleClearAll={handleClearAll}
      />
    </div>
  );
};

export default FilterBox;
