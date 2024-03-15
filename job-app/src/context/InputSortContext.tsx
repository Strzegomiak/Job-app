import { createContext, useState } from "react";

interface SelectValue {
  categories: string;
  type: string;
  level: string;
}

interface InputValue {
  title: string;
  company: string;
  location: string;
}

interface IdefaultFlag {
  selectValue: SelectValue;
  setSelectValue: React.Dispatch<React.SetStateAction<SelectValue>>;
  inputValue: InputValue;
  setInputValue: React.Dispatch<React.SetStateAction<InputValue>>;
}

interface IFavProvider {
  children: React.ReactNode;
}

const defaultFlag: IdefaultFlag = {
  selectValue: {
    categories: "",
    type: "",
    level: "",
  },
  setSelectValue: () => {},
  inputValue: {
    title: "",
    company: "",
    location: "",
  },
  setInputValue: () => {},
};

const InputSortContext = createContext(defaultFlag);
export const InputSortProvider = ({ children }: IFavProvider) => {
  const [selectValue, setSelectValue] = useState({
    categories: "",
    type: "",
    level: "",
  });

  const [inputValue, setInputValue] = useState({
    title: "",
    company: "",
    location: "",
  });

  return (
    <InputSortContext.Provider
      value={{ selectValue, setSelectValue, inputValue, setInputValue }}
    >
      {children}
    </InputSortContext.Provider>
  );
};

export default InputSortContext;
