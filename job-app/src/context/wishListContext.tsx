import { createContext, useState } from "react";
import { IJobOffers } from "../types/types";

interface IdefaultState {
  favOffers: any[];
  addToFavorites(offer: IJobOffers): void;
  deleteFavorites(id: number): void;
}

interface IwishListProvider {
  children: React.ReactNode;
}

const defaultState: IdefaultState = {
  favOffers: [],
  addToFavorites: (offer: IJobOffers) => {},
  deleteFavorites: (id: number) => {},
};

const WishListContext = createContext(defaultState);
export const wishListProvider = ({ children }: IwishListProvider) => {
  const [favOffers, setFavOffers] = useState<IJobOffers[]>([]);
  const addToFavorites = (offer: IJobOffers) => {
    const findOffer = favOffers.find((e) => e.id === offer.id);
    if (!findOffer) {
      setFavOffers((prev: any) => [...prev, offer]);
    }
  };
  const deleteFavorites = (id: number) => {
    const newOffers = favOffers.filter((e) => e.id !== id);
    setFavOffers(newOffers);
  };

  return (
    <WishListContext.Provider
      value={{ favOffers, addToFavorites, deleteFavorites }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListContext;
