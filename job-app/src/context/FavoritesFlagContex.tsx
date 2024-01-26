import { createContext, useState } from "react";

interface IdefaultFlag {
  favClicked: boolean;
  setFavClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFavProvider {
  children: React.ReactNode;
}

const defaultFlag: IdefaultFlag = {
  favClicked: false,
  setFavClicked: () => {},
};

const FavoritesFlagContex = createContext(defaultFlag);
export const FavoritesFlagProvider = ({ children }: IFavProvider) => {
  const [favClicked, setFavClicked] = useState(false);
  return (
    <FavoritesFlagContex.Provider value={{ favClicked, setFavClicked }}>
      {children}
    </FavoritesFlagContex.Provider>
  );
};

export default FavoritesFlagContex;
